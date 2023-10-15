import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { cardItem } from 'src/app/Models/cardItem';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardItems:cardItem[] = [];
  total:number = 0;
  discount:number = 0;
  delivery:number = 49;

  constructor(){
    let items = localStorage.getItem('cardItems');
    this.cardItems = items ? JSON.parse(items) : [];
    for(const item of this.cardItems){
      this.total += item.product.price;
      if(item.product.discountPrice){
        this.discount += item.product.discountPrice;
      }
    }
  }
}
