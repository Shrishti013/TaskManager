import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskCreateComponent {
  taskName:string='';
  taskDescription:string='';
  taskDeadline:string='';
  taskStatus:string='';
  // task: Task = new Task('', new Date());
  // isEditing = false;

  constructor(
    private router: Router,
    private taskService: TaskService) {}

  onSubmit() {
    this.taskService.taskName= this.taskName;
    this.taskService.taskDescription=this.taskDescription;
    this.taskService.taskDeadline=this.taskDescription;
    this.taskService.taskStatus=this.taskStatus;
    this.router.navigate(['/today'])

    // if (this.isEditing) {
    //   // Handle task update
    // } else {
    //   this.taskService.createTask(this.task);
    //   this.task = new Task('', new Date());
    // }
  }
}
