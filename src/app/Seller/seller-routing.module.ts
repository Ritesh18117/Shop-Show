import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sellerAuthGuard } from './auth/auth.guard';

const routes: Routes = [   
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.dashboardModule) },
  // Redirect /seller to /seller/login
  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  // Redirect invalid paths to /seller/login
  { path: '**', redirectTo: 'signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
