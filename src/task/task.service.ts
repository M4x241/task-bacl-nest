import { Injectable } from '@nestjs/common';
export interface typeTask {
  id: number;
  title: string;
  asunto: string;
  config: {
    importancia: string;
    initialtime: string;
    endtiem: string;
  };
}
@Injectable()
export class TaskService {
  private tasks = [];

  addTask(task: typeTask) {
    this.tasks.push(task);
    return 'aditional';
  }
  delTask(id) {
    this.tasks = this.tasks.filter((item) => item.id != id);
    return 'delete';
  }

  putTask(task, index) {
    this.tasks[index] = task;
    return 'update';
  }

  getTask() {
    return this.tasks;
  }
}
