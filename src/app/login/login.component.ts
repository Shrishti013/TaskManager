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
    this.authService.login(username, password).subscribe({
      next: (response) => {
        // Check the response from the server
        if (response.success) {
          alert('Login successful');
          this.authService.isAuthenticated = true;
          this.router.navigate(['/task']);
        } else {
          alert('Invalid credentials');
        }
      },
      error: (error) => {
        console.error('Login error:', error);
      },
    });
  }
}
