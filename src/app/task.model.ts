export class Task {
    // id?: number;
    name: string;
    deadline: Date;
    description?: string;
    status?: string;
    important?: boolean;

    constructor(
      name: string,
      deadline: Date,
      description?: string,
      status?: string,
      important: boolean = false // Default value for important
    ) {
      this.name = name;
      this.deadline = deadline;
      this.description = description || '';
      this.status = status || 'not-started';
      this.important = important;
    }
  
    // constructor(name: string, deadline: Date, description?: string, status?: string) {
    //   this.name = name;
    //   this.deadline = deadline;
    //   this.description = description || '';
    //   this.status = status || 'not-started';
    // }
  }
  export interface UserResponse {
    data: Task[];
  }