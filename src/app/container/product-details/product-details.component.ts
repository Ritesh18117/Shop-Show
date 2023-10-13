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

  // For Loading product when component is loaded 
  product!:Product;

  // For Item add to card 
  cardItem!:Product;

  @Output() onClose : EventEmitter<void> = new EventEmitter<void>();
  // closed!:boolean;

  // Load product at first to show to details page
  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

  // For Closing Button (will be sent to container component)
  onClosed(){
    this.onClose.emit();
  }

  addCard(){
    this.cardItem = this.product;
    console.log(this.product);
  }
}
