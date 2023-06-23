import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GetDataService } from './get-data.service';
import { LoginComponent } from '../register/login/login.component';
import { Token } from '@angular/compiler';
// import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  adminLogin: any = false;
  token = localStorage.getItem('token') ? this.adminLogin = true : this.adminLogin = false;

}
