import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interfaces/task.interface.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TasksService {
     // dummyTasks
     private readonly dummyTasks: Task[] = [
          {
               id: 1,
               title: "Project Setup",
               description: "Initialize NestJS project with TypeScript and ESLint",
               status: "done",
               priority: "high",
               createdAt: "9/21/2026, 6:24:58 AM",
          },
          {
               id: 2,
               title: "Database Migration",
               description: "Create schema for users and task entities",
               status: "in_progress",
               priority: "high",
               createdAt: "9/21/2026, 6:25:10 AM",
          },
          {
               id: 3,
               title: "Authentication API",
               description: "Implement JWT based auth endpoints",
               status: "open",
               priority: "medium",
               createdAt: "9/21/2026, 6:26:05 AM",
          },
          {
               id: 4,
               title: "Task Validation DTOs",
               description: "Add class-validator and class-transformer to DTOs",
               status: "open",
               priority: "low",
               createdAt: "9/21/2026, 6:27:30 AM",
          },
          {
               id: 5,
               title: "Unit Testing",
               description: "Write tests for TaskService and TaskController",
               status: "open",
               priority: "medium",
               createdAt: "9/21/2026, 6:28:45 AM",
          },
     ]

     // nextTaskId
     private nextTaskId = 6;

     // getAllTasks
     getAllTasks(status?: Task['status'], priority?: Task['priority']) {
          let task = this.dummyTasks;

          if(status) {
               task = task.filter((task) => task?.status === status)
          }

          if(priority) {
               task = task.filter((task) => task?.priority === priority)
          }

          return task;
     }

     // getTaskById
     getTaskById(id: number) {
          const task = this.dummyTasks.find((task) => task?.id === id);

          if(!task) {
               throw new NotFoundException(`Task with id ${id} not found!`)
          }

          return task;
     }

     // createTask
     createTask(createTaskDto: CreateTaskDto) {
          const task: Task = {
               id: this.nextTaskId++,
               title: createTaskDto?.title,
               description: createTaskDto?.description,
               status: 'in_progress',
               priority: createTaskDto?.priority,
               createdAt: new Date().toLocaleString('en-US')
          }

          this.dummyTasks.push(task);
          return this.dummyTasks;
     }

     // deleteTaskById
     deleteTaskById(id: number) {
          const taskIndex = this.dummyTasks.findIndex((task) => task?.id === id);

          if(taskIndex === -1) {
               throw new NotFoundException(`Task with id ${id} not found!`)
          }

          this.dummyTasks.splice(taskIndex, 1);
          return {
               success: true,
               message: `Task with id ${id} has been deleted`
          }
     }

     // updateTaskById
     updateTaskById(id: number, updateTaskDto: UpdateTaskDto) {
          const taskIndex = this.dummyTasks.findIndex((task) => task?.id === id);

          if(taskIndex === -1) {
               throw new NotFoundException(`Task with id ${id} not found!`)
          }

          const existingTask: Task = this.dummyTasks[taskIndex];
          const updatedTask = {
               ...existingTask,
               ...updateTaskDto
          };

          this.dummyTasks[taskIndex] = updatedTask;
          return this.dummyTasks;
     }
}
