import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting.model';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-concerts',
  template: `
    <div class="right-sidebar">
      <h2>Scheduled Meetings</h2>
      <ul>
        <li *ngFor="let meeting of meetings">
          {{ meeting.time }} - {{ meeting.name }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit{
  meetings: Meeting[] = [];

  constructor(private meetingService: MeetingService) {}

  ngOnInit(): void {
    this.meetings = this.meetingService.getMeetings();
  }

}
