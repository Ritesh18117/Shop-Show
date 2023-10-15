import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductsListComponent } from '../products-list/products-list.component';
import { cardItem } from 'src/app/Models/cardItem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // Variables for card Items
  color: string = "Default";
  size:number = -1;

  // For added In card alter
  message:string = ""

  @Input() productListComp!: ProductsListComponent;

  // For Loading product when component is loaded 
  product!:Product;
  cardItem!:cardItem;
  
  // For Closing Card
  @Output() onClose : EventEmitter<void> = new EventEmitter<void>();

  // For adding item to card
  @Output() addItemToCard: EventEmitter<cardItem> = new EventEmitter<cardItem>();

  // Load product at first to show to details page
  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

  // For Closing Button (will be sent to container component)
  onClosed(){
    this.onClose.emit();
  }

  // Color Selection
  pickColor(color:string){
    console.log(color);
    this.color = color;
  }
  
  // Size Selection
  pickSize(size:number){
    this.size = size;
    console.log(this.size);
  }

  // Add to card 
  addToCard(){
    if (!this.cardItem) {
      this.cardItem = new cardItem(this.product, '', -1); 
    }

    if(this.color){
      if(this.size !== -1){
        this.cardItem.product = this.product;
        this.cardItem.color = this.color;
        this.cardItem.size = this.size;
        this.addItemToCard.emit(this.cardItem);
        this.message = 'Product Added!!';
        setTimeout(() => {
          this.message = '';
        }, 2000);
      }
      else{
        this.message = 'Please Select Size!!';
        setTimeout(() => {
          this.message = '';
        }, 2000);
      }
    }
    else{
      this.message = 'Please Select Color!!';
      setTimeout(() => {
        this.message = '';
      }, 2000);
    }    
  }
}
