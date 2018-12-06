declare function require(path: string);
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 someProperty = false;
 show:boolean = false;
 showHealth :boolean=false
 showManufacturing : boolean = false;
 showTextile: boolean = false;
 showEnergy:boolean = false;


 
 constructor(private router : Router){ }

  ngOnInit() {
  }



// setClasses(){
  
// let classes ={
// styleclass:this.someProperty
//   };

//  return classes 
// }

redirect() {
  //this.selected ===itemindex;
 this.router.navigate(['./usecase']);
 // this.someProperty = true
 this.show = true
 this.showHealth = false
 this.showManufacturing = false
 this.showTextile = false;
 this.showEnergy = false

}
redirectHealth() {
   this.router.navigate(['./health']);
 // this.someProperty = true
this.showHealth = true
this.show = false
this.showManufacturing = false;
this.showTextile = false;
this.showEnergy = false;
}

redirectHealthleave() {
  this.router.navigate(['./health']);
// this.someProperty = true
this.showHealth = false
this.show = false;
this.showManufacturing = false;
this.showTextile = false;
this.showEnergy = false;
}


redirectManufacturing() {
  this.router.navigate(['./manufacturing']);
// this.someProperty = true
this.showManufacturing = true
this.show = false
this.showHealth = false;
this.showTextile = false;
this.showEnergy = false;

}

redirectTextile() {
  this.router.navigate(['./textile']);
// this.someProperty = true
this.showTextile = true
this.show = false
this.showHealth = false;
this.showEnergy = false;
this.showManufacturing = false;

}

redirectEnergy() {
  this.router.navigate(['./energy']);
// this.someProperty = true
this.showEnergy = true;
this.show = false
this.showHealth = false;
this.showManufacturing = false;
this.showTextile = false;

}






  // imagesrc = require('../../assets/')



   
  

  
  // redirectreport() {
  //   //this.selected ===itemindex;
  //  this.router.navigate(['./reports']);
  //  this.someProperty = true
   
  
  //  //this.setClasses();
   
  // }


}
