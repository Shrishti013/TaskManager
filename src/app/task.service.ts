import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task } from './task.model';

let taskIdCounter = 1;

function generateTaskId() {
  return taskIdCounter++;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task[] = [];
  private taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  taskName:string='';
  taskDescription:string='';
  taskDeadline:string='';
  taskStatus:string='';

  constructor(){
    this.tasks = [
      {
        name: 'Task 1',
        deadline: new Date('2023-10-07'), // Replace with the actual due date
      },
    ];

    this.taskSubject.next(this.tasks);
  }

  getTasks() {
    return this.taskSubject.asObservable();
  }

  getTodayTasks(): Observable<Task[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const filteredTasks = this.tasks.filter(
      (task) => task.deadline.getTime() === today.getTime()
    );
    return of(filteredTasks);
  }

  createNewTask(name: string, deadline: Date) {
    const newTask: Task = {
      name,
      deadline,
    };
    this.tasks.push(newTask);
    this.taskSubject.next(this.tasks);
  }

  getUpcomingTasks(): Observable<Task[]> {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Get the date for tomorrow
    const filteredTasks = this.tasks.filter((task) => task.deadline >= tomorrow);
    return of(filteredTasks);
  }

}