import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: ContainerComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Wild Card Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
