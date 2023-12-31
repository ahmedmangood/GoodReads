import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email!: string;
  password!: string;
  tocken: any;
  loginForm!: FormGroup;
  errorAlert = false;
  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/)]]
    })
  }

  get registerForm() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe((res: any) => {
          // Login successful, store token and redirect to home page
          localStorage.setItem('token', res.token);
          // Redirect to home page
          if(res.isAdmin === true) {
            this.router.navigate(['/admin/dashboard'])
          } else {
            this.errorAlert = true;
          }
        }
      );
}
}


