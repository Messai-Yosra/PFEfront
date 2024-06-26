import { Component } from '@angular/core';
import {AuthentificationService} from "../login/services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public authentificationService : AuthentificationService,private router: Router) {
  }
  logout(){
    
      localStorage.removeItem('token');
      localStorage.removeItem('headers');
    
    this.router.navigate(['']);
  }

}
