import { Component } from '@angular/core';
import { Address } from 'src/app/Models/address';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

  myAddress: Address[] = [];

  constructor() {
    try {
      let addr = localStorage.getItem('myAddress');
      if (addr !== null) {
        this.myAddress = JSON.parse(addr);
      }
      else{
        localStorage.setItem('myAddress','');
      }
    } catch (error) {
      console.log("Address parsing Error")
    }
  }
}
