import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { ReportsComponent } from './reports/reports.component';
import{HealthComponent} from './health/health.component'
import {ManfacturingComponent} from './manfacturing/manfacturing.component'
import {TextileComponent} from './textile/textile.component'
import {EnergyComponent} from './energy/energy.component'





const routes: Routes = [
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path: 'health', component:HealthComponent},
 {path: 'manufacturing', component:ManfacturingComponent},
 {path: 'textile', component:TextileComponent},
 {path: 'energy', component:EnergyComponent},
  {path: 'usecase', component : UsecaseComponent, children:[
    {path: 'reports', component :ReportsComponent,outlet:'reports'},
  ]},  
  
 
  
  // {path: '', component : HomeComponent, pathMatch : 'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
