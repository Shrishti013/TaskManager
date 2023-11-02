import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SighupService } from 'src/sighup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private userService: SighupService, private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: any } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password === confirmPassword) {
      return null; // No validation error
    } else {
      return { passwordMismatch: true }; // Validation error
    }
  }

  onSubmit() {
    if (this.signupForm?.valid) {
      const signupData = this.signupForm.value;
      this.userService.addUser(signupData);
      this.signupForm.reset();
      console.log('Sign Up Successful');
      alert('Sign Up Successful'); 
      this.router.navigate(['/thankyou']);
      console.log('Sign Up Successful');
    } else {
      alert('Please fill in all details and ensure that the passwords match.');
    }
  }
}
