import { IsIn, IsOptional, IsString } from "class-validator"
import { TASK_PRIORITY_OPTIONS } from "../interfaces/task.interface.js"

export class UpdateTaskDto {
     @IsOptional()
     @IsString()
     title?: string

     @IsOptional()
     @IsString()
     description?: string

     @IsOptional()
     @IsIn(TASK_PRIORITY_OPTIONS, {
          message: `Priority must be one of ${TASK_PRIORITY_OPTIONS.join(', ')}`
     })
     priority?: typeof TASK_PRIORITY_OPTIONS[number]
}
