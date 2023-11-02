import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService) { }

  onSubmit(){
    console.log(this.profile);
    this.toastr.success('Product Added!!', 'Success');
  }
}
