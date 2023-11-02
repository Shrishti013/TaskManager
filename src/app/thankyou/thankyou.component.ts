import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SighupService } from 'src/sighup.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent{
  firstName: string = '';

  constructor(private signupService: SighupService) {
    const users = this.signupService.getUsers();
    if (users.length > 0) {
      this.firstName = users[users.length - 1].firstName;
    }
  }
}
