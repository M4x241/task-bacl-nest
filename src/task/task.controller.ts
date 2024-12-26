import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TaskService, typeTask } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  nesTask(@Body() task: typeTask) {
    this.taskService.addTask(task);
  }

  @Put()
  updateTask(@Body() task: typeTask) {
    const data = this.taskService.getTask();
    const index = data.findIndex((item) => item === task.id);
    this.taskService.putTask(task, index);
  }

  @Get()
  getTask() {
    this.taskService.getTask();
  }

  @Delete()
  deleteTask(id) {
    this.taskService.delTask(id);
  }
}
