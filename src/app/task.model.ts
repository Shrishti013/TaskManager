export class Task {
    id?: number;
    name: string;
    deadline: Date;
    description?: string;
    status?: string;
  
    constructor(name: string, deadline: Date, description?: string, status?: string) {
      this.name = name;
      this.deadline = deadline;
      this.description = description || '';
      this.status = status || 'not-started';
    }
  }