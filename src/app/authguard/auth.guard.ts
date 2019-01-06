import { Injectable } from '@angular/core';
import { CanActivate,CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from '../signup/signup.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {
  constructor(private signupService:SignupService){

  }
  canLoad(route:Route){
    return this.signupService.authenticated;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.signupService.authenticated;
  }
}
