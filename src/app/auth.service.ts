import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  // private inactivityTimeout = 60000000000; // 10 seconds in milliseconds
  // private inactivityTimer: any; // Corrected type to 'number'
  // private resetTimer = new Subject<void>();

  constructor(private router: Router) {
    // this.inactivityTimer = 0; // Initialize in the constructor
    // this.resetTimer.subscribe(() => {
    //   clearTimeout(this.inactivityTimer);
    //   this.inactivityTimer = setTimeout(() => {
    //     this.logout();
    //   }, this.inactivityTimeout);
    // });
  }

  login(username: string, password: string): boolean {
    // Implement your authentication logic here.
    if (username === 'Shrishti027' && password === 'Shrishti@027') {
      this.isAuthenticated = true;
      // this.resetTimer.next();
      return true;
    }
    return false;
  }

  // logout(): void {
  //   this.isAuthenticated = false;
  //   clearTimeout(this.inactivityTimer);
  //   this.router.navigate(['/login']);
  // }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
