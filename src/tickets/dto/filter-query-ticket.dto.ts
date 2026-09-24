import { IsIn, IsOptional } from "class-validator";
import { TICKET_PRIORITY_OPTIONS, TICKET_STATUS_OPTIONS } from "../interfaces/ticket.interface.js";

export class FilterQueryTicketDto {
     @IsOptional()
     @IsIn(TICKET_STATUS_OPTIONS, {
          message: `Status must be one of ${TICKET_STATUS_OPTIONS.join(', ')}`
     })
     status?: typeof TICKET_STATUS_OPTIONS[number]

     @IsOptional()
     @IsIn(TICKET_PRIORITY_OPTIONS, {
          message: `Priority must be one of ${TICKET_PRIORITY_OPTIONS.join(', ')}`
     })
     priority?: typeof TICKET_PRIORITY_OPTIONS[number]
}
