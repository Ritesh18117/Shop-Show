import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productListComp!: ProductsListComponent;

  product!:Product;

  @Output() onClose : EventEmitter<void> = new EventEmitter<void>();
  // closed!:boolean;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

  onClosed(){
    this.onClose.emit();
  }
}
