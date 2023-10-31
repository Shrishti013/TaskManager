import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  
  private tasks: any[] = [{
    "taskName": "Complete Project Proposal",
    "taskDescription": "Prepare and submit the project proposal to the client.",
    "taskDeadline": "2023-11-15",
    "taskStatus": "In Progress",
    "taskImportant": true
  },
  {
    "taskName": "Design Wireframes",
    "taskDescription": "Create wireframes for the user interface of the application.",
    "taskDeadline": "2023-11-20",
    "taskStatus": "Completed",
    "taskImportant": false
  },
  {
    "taskName": "Develop Backend API",
    "taskDescription": "Implement the backend API for the application.",
    "taskDeadline": "2023-11-25",
    "taskStatus": "In Progress",
    "taskImportant": true
  },
  {
    "taskName": "Write User Documentation",
    "taskDescription": "Prepare user documentation for the application's features.",
    "taskDeadline": "2023-10-31",
    "taskStatus": "In Progress",
    "taskImportant": false
  },
  {
    "taskName": "Test Application",
    "taskDescription": "Perform extensive testing of the application for quality assurance.",
    "taskDeadline": "2023-10-31",
    "taskStatus": "In Progress",
    "taskImportant": true
  },
  {
    "taskName": "Client Meeting",
    "taskDescription": "Schedule and attend a meeting with the client to discuss project progress.",
    "taskDeadline": "2023-10-10",
    "taskStatus": "In Progress",
    "taskImportant": true
  },
  {
    "taskName": "Finalize Project",
    "taskDescription": "Conclude the project and prepare for client handover.",
    "taskDeadline": "2023-10-15",
    "taskStatus": "In Progress",
    "taskImportant": false
  },
  {
    "taskName": "Client Demo",
    "taskDescription": "Arrange a demonstration of the project's features for the client.",
    "taskDeadline": "2023-12-20",
    "taskStatus": "In Progress",
    "taskImportant": true
  },
  {
    "taskName": "Project Handover",
    "taskDescription": "Hand over the project deliverables to the client and ensure their satisfaction.",
    "taskDeadline": "2023-12-25",
    "taskStatus": "In Progress",
    "taskImportant": true
  },
  {
    "taskName": "Project Evaluation",
    "taskDescription": "Evaluate the project's success and lessons learned for future reference.",
    "taskDeadline": "2023-12-30",
    "taskStatus": "In Progress",
    "taskImportant": false
  }];
  taskName:string = '';
  taskDescription ='';
  taskDeadline = '';
  taskStatus = '';
  taskImportant = '';

  constructor(){}

  addTask(newTask: any) {
    // Add the new task to the events array
    this.tasks.push(newTask);
  }
  getTasks(): any[] {
    return this.tasks;
  }

}
  // private jsonFileUrl = 'assets/tasks.json';

  // constructor(private http: HttpClient) {}

  // createTask(taskData: any): Observable<any> {
  //   return this.getTasks().pipe(
  //     catchError((error) => {
  //       console.error('Error fetching tasks', error);
  //       return of([]);
  //     }),
  //     // Append the new task to the existing tasks
  //     map((tasks: any[]) => {
  //       const newTask = { ...taskData };
  //       tasks.push(newTask);
  //       return tasks;
  //     })
  //   );
  // }

  // getTasks(): Observable<any[]> {
  //   return this.http.get<any[]>(this.jsonFileUrl);
  // }
  
