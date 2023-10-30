import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    dashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class dashboardModule { }