import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    dashboardModule,
    AuthModule
  ]
})
export class SellerModule { }

