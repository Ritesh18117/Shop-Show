import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './container/cart/cart.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './container/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: ContainerComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      canActivate:[authGuard]
    },
    { path:'cart', component:CardComponent, canActivate:[authGuard] },
    { path:'dashboard', component:DashboardComponent, canActivate:[authGuard] },
    { path: '**', redirectTo: ''} // Wild Card Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
