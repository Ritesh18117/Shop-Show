import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { SerachComponent } from './container/serach/serach.component';
import { ProductsListComponent } from './container/products-list/products-list.component';
import { ProductComponent } from './container/products-list/product/product.component'
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './container/products-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AuthModule } from './auth/auth.module'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NavbarComponent,
    ContainerComponent,
    SerachComponent,
    ProductsListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
