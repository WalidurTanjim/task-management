import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { TASK_PRIORITY_OPTIONS } from "../interfaces/task.interface.js";

export class CreateTaskDto {
     @IsString()
     @IsNotEmpty()
     title: string

     @IsString()
     @IsNotEmpty()
     description: string

     @IsNotEmpty()
     @IsIn(TASK_PRIORITY_OPTIONS, {
          message: `Priority must be one of ${TASK_PRIORITY_OPTIONS.join(', ')}`
     })
     priority: typeof TASK_PRIORITY_OPTIONS[number]
}
