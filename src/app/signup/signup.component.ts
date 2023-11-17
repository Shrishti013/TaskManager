import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private signupService: SignupService) { }
  username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';

  registerUser() {
    console.log("register user enter.");
    console.log("register data" + this.username, this.password, this.email);
    
    this.signupService.registerUser(this.username, this.password, this.email).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('Registration successful');
        this.router.navigate(['/login']);
        this.router.navigate(['/task']);
      },
      error: (error) => {
        console.error('Registration error:', error);
        alert('Already Registered');
        this.router.navigate(['/login']);
      }
    });

    console.log("register user exit.");


  }

}
