import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile = {
    companyName:"Show Shoes",
    companyType:"E-commerce",
    website:"show.shoes.com",
    contact:"6297425557",
    gst:"22AAAAA0000A1Z5",
    place:"Delhi"
  }


  onSubmit(){
    console.log(this.profile);
  }
}
