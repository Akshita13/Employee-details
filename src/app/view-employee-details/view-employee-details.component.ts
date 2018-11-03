import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/employee-data.service';


@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit {
  viewData: any[];
  constructor(private employeedata: CoreService) { }

  ngOnInit() {
    
  //to get the data we have to subscribe it.once we subscribe we don' have to tell it everytime to get the data
  
    this.employeedata.getdata().subscribe(
      (data) => {
        this.viewData = data;
      }
    )
  }
  delete(id)
  {
    this.viewData.pop();
  }

}
