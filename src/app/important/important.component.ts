import { Component } from '@angular/core';
import { Task } from '../task.model';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent {
  tasks$!: Observable<Task[]>;

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit() {
    // Get the important tasks using the task service
    // this.tasks$ = this.taskService.getTasks();
  }
  finishAdding() {
    this.router.navigate(['/task']);
  }

}
