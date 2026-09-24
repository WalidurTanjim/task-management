import { IsIn, IsOptional } from "class-validator";
import { TASK_PRIORITY_OPTIONS, TASK_STATUS_OPTIONS } from "../interfaces/task.interface.js";

export class FilterQueryTaskDto {
     @IsOptional()
     @IsIn(TASK_STATUS_OPTIONS, {
          message: `Status must be one of ${TASK_STATUS_OPTIONS.join(', ')}`
     })
     status?: typeof TASK_STATUS_OPTIONS[number]

     @IsOptional()
     @IsIn(TASK_PRIORITY_OPTIONS, {
          message: `Priority must be one of ${TASK_PRIORITY_OPTIONS.join(', ')}`
     })
     priority?: typeof TASK_PRIORITY_OPTIONS[number]
}
