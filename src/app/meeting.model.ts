export class Meeting {
    time: string;
    name: string;
    members: string[];
    // Add any other necessary properties
    constructor(time: string, name: string, members: string[]) {
        this.time = time;
        this.name = name;
        this.members = members;
      }
  }