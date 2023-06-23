import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GetDataService } from 'src/app/services/get-data.service';

@Injectable({
  providedIn: 'root'
})
export class authAdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.adminLogin) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}