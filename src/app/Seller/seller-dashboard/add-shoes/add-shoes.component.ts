import { Component } from '@angular/core';

@Component({
  selector: 'app-add-shoes',
  templateUrl: './add-shoes.component.html',
  styleUrls: ['./add-shoes.component.css']
})
export class AddShoesComponent {
  profile = {
    companyName:"Show Shoes",
    companyType:"E-commerce",
    website:"show.shoes.com",
    contact:"6297425557",
    gst:"22AAAAA0000A1Z5",
    place:"Delhi"
  }

  product = {
    brand:"",
    name:"",
  }

  showForm:boolean = false;
  
  showAddressForm(){
    this.showForm = !this.showForm
  }

  onSubmit(){
    console.log(this.profile);
  }
}
