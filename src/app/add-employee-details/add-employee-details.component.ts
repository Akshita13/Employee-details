import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/employee-data.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {
  submitted = false;
  public designation:string[];
  public employee:any[]=[];


  EmployeeDetails=this.fb.group({
    //validations
    name:['',Validators.required],
    age:['',Validators.required],
    designation:['',Validators.required],
    date:['',Validators.required]

  })
  constructor(private employeedata:CoreService,private fb:FormBuilder)
   {

   }

  ngOnInit() {
    this.designation=this.employeedata.getdesignationdata();
  
  }
 
  //on click of submit button i add the data which is submitted in form 
  onSubmit(Employeedetails) {
    console.log(Employeedetails);
    
    this.employeedata.adddata(Employeedetails)
      .subscribe(emp => {
        this.submitted = true;
      });
  

}
}
