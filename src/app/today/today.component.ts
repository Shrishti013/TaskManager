import { Component, OnInit } from '@angular/core';
import {TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  tasks: Task[] = [];
  todayTasks: Task[] = [];
  taskName:string='';
  taskDescription:string='';
  taskDeadline:string='';
  taskStatus:string='';

  constructor(private taskService: TaskService) {
    this.getTodayTasks();
    this.taskName=taskService.taskName;
    this.taskDescription=taskService.taskDescription;
    this.taskDeadline=taskService.taskDeadline;
    this.taskStatus=taskService.taskStatus;
  }
  ngOnInit() {}

  getTodayTasks() {
    this.taskService.getTodayTasks().subscribe((tasks) => {
      this.todayTasks = tasks;
    });
  }
}
