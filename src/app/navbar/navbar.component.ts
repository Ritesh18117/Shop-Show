import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  isLoggedIn:string = "false";


  constructor(private _authService:AuthService){ }

  ngAfterContentChecked(){
    if(localStorage.getItem("isLoggedIn") !== null){
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      if (storedIsLoggedIn !== null) {
        this.isLoggedIn = storedIsLoggedIn;
      } else {
        console.log("Value for 'isLoggedIn' is null or not found.");
        this.isLoggedIn = "false";  // Set a default value
      }
    }
  }

  logout(){
    this._authService.logout();
    this.isLoggedIn = "false";
  }
}
