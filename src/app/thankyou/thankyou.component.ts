import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from '../signup.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  tasks: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

}
