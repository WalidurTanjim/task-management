import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { FilterQueryTicketDto } from './dto/filter-query-ticket.dto.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { UpdateTicketDto } from './dto/update-ticket.dto.js';

@Controller('tickets')
export class TicketsController {
     constructor(private readonly ticketsService: TicketsService) {}

     @Get()
     getAllTickets(@Query() filterQueryTicketDto: FilterQueryTicketDto) {
          return this.ticketsService.getAllTickets(filterQueryTicketDto?.status, filterQueryTicketDto?.priority);
     }
     
     @Get(':id')
     getTicketById(@Param('id', ParseIntPipe) id: number) {
          return this.ticketsService.getTicketById(id);
     }

     @Post()
     createTicket(@Body() createTicketDto: CreateTicketDto) {
          return this.ticketsService.createTicket(createTicketDto);
     }

     @Delete(':id')
     deleteTicketById(@Param('id', ParseIntPipe) id: number) {
          return this.ticketsService.deleteTicketById(id);
     }

     @Patch(':id')
     updateTicketById(
          @Param('id', ParseIntPipe) id: number, 
          @Body() updateTicketDto: UpdateTicketDto
     ) {
          return this.ticketsService.updateTicketById(id, updateTicketDto)
     }
}
