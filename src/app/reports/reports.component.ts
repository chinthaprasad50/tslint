import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
   routetracking:boolean = false;
  constructor() { }

  ngOnInit() {
  }
reportTracking(){

this.routetracking = true;



}
 

}