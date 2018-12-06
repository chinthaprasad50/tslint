import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { ReportsComponent } from './reports/reports.component';
import { HealthComponent } from './health/health.component';
import { ManfacturingComponent } from './manfacturing/manfacturing.component';
import { TextileComponent } from './textile/textile.component';
import { EnergyComponent } from './energy/energy.component';
import { VehicledataComponent } from './vehicledata/vehicledata.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsecaseComponent,
    ReportsComponent,
    HealthComponent,
    ManfacturingComponent,
    TextileComponent,
    EnergyComponent,
    VehicledataComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
