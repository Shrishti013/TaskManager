import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: number;
  taskName: string = '';
  taskDeadline: string = '';
  taskDescription: string = '';
  taskStatus: string = '';
  taskImportant: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private taskService: TaskService, private http: HttpClient) { }

  ngOnInit(): void {
    this.taskId = Math.floor(Math.random() * 100); // Generate a random numeric task ID (between 0 and 99)
    this.taskForm = this.formBuilder.group({
      // taskId: uuidv4(), 
      taskId: [this.taskId],
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required],
      taskDeadline: ['', Validators.required],
      taskStatus: ['In Progress', Validators.required],
      taskImportant: [false]
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      this.taskService.addTask(taskData);
      this.taskForm.reset();
      // this.taskId = uuidv4(); 
      this.taskId = Math.floor(Math.random() * 100); // Generate a new random numeric task ID
    } else {
      alert('Please fill in all details.');
    }
  }
  navigateToMainPage() {
    this.router.navigate(['/task']);
  }

}