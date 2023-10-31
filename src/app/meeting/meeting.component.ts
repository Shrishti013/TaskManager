import { Component} from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from '../meeting.model';

@Component({
  selector: 'app-meeting',
  template:'<ejs-schedule></ejs-schedule>',
  //templateUrl: './meeting.component.html', 
  styleUrls: ['./meeting.component.css']

})
export class MeetingComponent  {
  constructor(private meetingService: MeetingService) {}

  // Add a meeting
  addMeeting(): void {
    const newMeeting: Meeting = {
      time: '09:00 AM',
      name: 'Meeting Task',
      members: ['Member 1', 'Member 2', 'Member 3'],
    };

    this.meetingService.addMeeting(newMeeting);
  }  
}
