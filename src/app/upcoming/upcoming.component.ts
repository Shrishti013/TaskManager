import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  tasks: any[] = [];
  taskName: string = '';
  taskDeadline: string = '';
  taskDescription: string = '';
  taskStatus: string = '';
  taskImportant: boolean = false;
  currentTab: 'past' | 'today' | 'upcoming' = 'today';  
  pastTasks: any[] = [];
  todayTasks: any[] = [];
  upcomingTasks: any[] = [];

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.sortTasksByDeadline();
  }

  changeTab(tab: 'past' | 'today' | 'upcoming') {
    this.currentTab = tab;
  }

  finishAdding(){
    this.router.navigate(['/task']);
  }

  sortTasksByDeadline() {
    const allTasks = this.taskService.getTasks();

    const today = new Date().toISOString().split('T')[0];

    this.pastTasks = allTasks.filter((task) => task.taskDeadline < today);
    this.todayTasks = allTasks.filter((task) => task.taskDeadline === today);
    this.upcomingTasks = allTasks.filter((task) => task.taskDeadline > today);
  }
}
