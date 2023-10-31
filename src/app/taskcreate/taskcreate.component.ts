import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 


@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskCreateComponent implements OnInit{
  taskForm!: FormGroup;
  taskName: string = '';
  taskDeadline: string = '';
  taskDescription: string = '';
  taskStatus: string = '';
  taskImportant: boolean = false;

  constructor(private router : Router, private formBuilder: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required],
      taskDeadline: ['', Validators.required],
      taskStatus: ['In Progress', Validators.required],
      taskImportant: [false]
    });
  }

  // onSubmit() {
  //   // Handle form submission here
  //   if (this.taskForm.valid) {
  //     const taskData = this.taskForm.value;
  //     this.taskService.addTask(taskData);
  //     // Clear the form after submission if needed
  //     this.taskForm.reset();
  //   } else {
  //     alert('Please fill in all details.');
  //   }
  // }
  createTask() {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      this.taskService.addTask(taskData);
      // Clear the form after submission if needed
      this.taskForm.reset();
    } else {
      alert('Please fill in all details.');
    }
  }
  // createTask() {
  //   const newTask = {
  //     taskName: 'Your Task Name',
  //     taskDescription: 'Your Task Description', 
  //     taskDeadline: 'Your Task Deadline', 
  //     taskStatus: 'Your Task Status', 
  //     taskImportant: false 
  //   };

  //   this.taskService.addTask(newTask);
  // }

  navigateToMainPage() {
    this.router.navigate(['/task']);
  }
}