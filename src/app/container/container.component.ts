import { Component, ViewChild } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  
  searched:string = '';

  @ViewChild(ProductsListComponent) productListComponent!: ProductsListComponent;
  // @ViewChild(ProductDetailsComponent) productDetailComponent!: ProductDetailsComponent;

  searchIt(event:string){
    this.searched = event;
    console.log(this.searched + "From Contaner");
  }

  onProductDetailsClose() {
    this.productListComponent.showProductDetails = false;
  }
}
