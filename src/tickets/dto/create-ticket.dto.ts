import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { TICKET_PRIORITY_OPTIONS } from "../interfaces/ticket.interface.js";

export class CreateTicketDto {
     @IsString()
     @IsNotEmpty()
     subject: string

     @IsString()
     @IsNotEmpty()
     description: string

     @IsNotEmpty()
     @IsIn(TICKET_PRIORITY_OPTIONS, {
          message: `Priority must be one of ${TICKET_PRIORITY_OPTIONS.join(', ')}`
     })
     priority: typeof TICKET_PRIORITY_OPTIONS[number]
}
