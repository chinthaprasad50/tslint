import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.css']
})
export class UsecaseComponent implements OnInit {
  showChild=false;
  showfleetManagment:boolean= false;
  fleetMaintaince :boolean = false;
  vehiclerouteTracking:boolean = false;
  showHealth :boolean =false;
  constructor(private router : Router) { 

  }

  ngOnInit() {
  }
// click: any =0

  redirect() {
    // this.router.navigate(['/',{outlets: {reports: ['reports']}}]);
    this.showChild = true;
    this.showfleetManagment = true
    this.fleetMaintaince = false;
    this.showHealth = false
    
  // alert(JSON.stringify(this.router))
    
  }


  redirectfleetMaintaince() {
    this.showChild = false;
    this.showHealth = true;
    this.fleetMaintaince = true;
    this.showfleetManagment = false

  }

}
