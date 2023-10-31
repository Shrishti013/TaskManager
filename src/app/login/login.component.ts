import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };
  // loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}


  login(): void {
    const { username, password } = this.user;
    if (this.authService.login(username, password)) {
      alert('Login successful');
      this.router.navigate(['/task']);
      this.user.username = '';
      this.user.password = '';
    } else {
      alert('Invalid credentials');
    }
  }

  forgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

}
