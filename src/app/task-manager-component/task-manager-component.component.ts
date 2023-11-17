import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-manager-component',
  templateUrl: './task-manager-component.component.html',
  styleUrls: ['./task-manager-component.component.css']
})
export class TaskManagerComponentComponent implements OnInit {
  taskFormVisible = false;
  currentTab = 'all';
  newTask: Task = new Task('', new Date());
  tasks: any[] = [];

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    minWidth: '10rem',
    placeholder: 'Enter text here ....',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  }

  showOptions: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  // toggleOptions() {
  //   this.showOptions = !this.showOptions;
  // }

  toggleTaskForm() {
    this.taskFormVisible = !this.taskFormVisible;
  }

  createTask() {
    this.taskService.addTask(this.newTask);
    // Reset the form or perform any other necessary actions
    this.newTask = new Task('', new Date());
  }



  changeTab(tab: string) {
    this.currentTab = tab;
  }

  // refreshTaskList() {
  //   this.taskService.getTasks().subscribe(tasks => {
  //     this.tasks = tasks;
  //   });
  // }

}
