import { SignupService } from './../../signup/signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false; 
  constructor(public signupService:SignupService,private router:Router) {
   }
  
  ngOnInit() {
  
  }
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  signOut(){
    this.signupService.authenticated=false;
    this.router.navigate(['/signup'])

  }

}
