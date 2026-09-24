import { Body, Controller, Delete, Get, Header, HttpCode, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { FilterQueryTaskDto } from './dto/filter-query-task.dto.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Controller('tasks')
export class TasksController {
     constructor(private readonly tasksService: TasksService) {}

     @Get()
     // @HttpCode(500);
     // @Header('Cache-Control', 'no-store')
     getAllTasks(@Query() filterQueryTaskDto: FilterQueryTaskDto) {
          return this.tasksService.getAllTasks(filterQueryTaskDto?.status, filterQueryTaskDto?.priority);
     }

     @Get(':id')
     getTaskById(@Param('id', ParseIntPipe) id: number) {
          return this.tasksService.getTaskById(id);
     }

     @Post()
     createTask(@Body() createTaskDto: CreateTaskDto) {
          return this.tasksService.createTask(createTaskDto);
     }

     @Delete(':id')
     deleteTaskById(@Param('id', ParseIntPipe) id: number) {
          return this.tasksService.deleteTaskById(id);
     }

     @Patch(':id')
     updateTaskById(
          @Param('id', ParseIntPipe) id: number,
          @Body() updateTaskDto: UpdateTaskDto
     ){
          return this.tasksService.updateTaskById(id, updateTaskDto)
     }
}
