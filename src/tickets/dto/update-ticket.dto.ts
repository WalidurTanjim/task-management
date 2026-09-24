import { IsIn, IsOptional, IsString } from "class-validator";
import { TICKET_PRIORITY_OPTIONS } from "../interfaces/ticket.interface.js";

export class UpdateTicketDto {
     @IsOptional()
     @IsString()
     subject: string

     @IsOptional()
     @IsString()
     description: string

     @IsOptional()
     @IsIn(TICKET_PRIORITY_OPTIONS, {
          message: `Priority must be one of ${TICKET_PRIORITY_OPTIONS.join(', ')}`
     })
     priority: typeof TICKET_PRIORITY_OPTIONS[number]
}
