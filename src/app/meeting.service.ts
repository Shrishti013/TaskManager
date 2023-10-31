import { Injectable } from '@angular/core';
import { Meeting } from './meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetings: Meeting[] = [];

  addMeeting(meeting: Meeting) {
    this.meetings.push(meeting);
  }

  getMeetings(): Meeting[] {
    return this.meetings;
  }
}
