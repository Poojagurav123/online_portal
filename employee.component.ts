import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // employees:Employee[]=[];
  // firstname:string;
  // constructor() { }

  // ngOnInit(): void {
  //   this.employees=[
  //     {e_id:1,first_name:'pooja',last_name:'Gurav',salary:50000},
  //     {e_id:2,first_name:'Sneha',last_name:'Kurkure',salary:50000},
  //     {e_id:3,first_name:'Bhagyashri',last_name:'Mahajan',salary:50000},
  //     {e_id:4,first_name:'Khushbu',last_name:'Salunkhe',salary:50000}
  //   ]
  // }
  // searchEmployee(){
  //   if(this.firstname!=""){
  //     this.employees=this.employees.filter(res=>{
  //       return res.first_name.match(this.firstname);
  //     });
  //   }
  //   else if(this.firstname==""){
  //     this.ngOnInit();
  //   }
  //  }
  employee:Employee[]=[];
  firstname:string;
  constructor(){

  }
  ngOnInit():void{
    this.employee=[
      {id:1,first_name:'pooja',last_name:'gurav'},
      {id:3,first_name:'Bhagyashri',last_name:'Mahajan'},
      {id:4,first_name:'Khushbu',last_name:'Salunkhe'}

    ]
  }
  searchEmployee(){
    if(this.firstname!=""){
      this.employee=this.employee.filter(res=>{
        return res.first_name.match(this.firstname);
      });
    }else if(this.firstname==""){
      this.ngOnInit();
    }
    
    
  }

}
   


