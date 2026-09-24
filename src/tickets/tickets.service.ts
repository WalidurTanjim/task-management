import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './interfaces/ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { UpdateTicketDto } from './dto/update-ticket.dto.js';

@Injectable()
export class TicketsService {
     // dummyTickets
     private readonly dummyTickets: Ticket[] = [
          {
               id: 1,
               subject: "Login Failure on Mobile App",
               description: "Users are getting 500 internal server error when trying to log in via iOS app.",
               status: "open",
               priority: "high",
               createdAt: "9/21/2026, 6:24:58 AM",
          },
          {
               id: 2,
               subject: "Payment Gateway Timeout",
               description: "bKash payment gateway times out during peak hours.",
               status: "open",
               priority: "high",
               createdAt: "9/21/2026, 6:25:15 AM",
          },
          {
               id: 3,
               subject: "Profile Picture Upload Issue",
               description: "PNG images larger than 2MB fail to render on profile dashboard.",
               status: "closed",
               priority: "low",
               createdAt: "9/21/2026, 6:26:00 AM",
          },
          {
               id: 4,
               subject: "Email Notification Delay",
               description: "Password reset emails are taking up to 15 minutes to deliver.",
               status: "open",
               priority: "medium",
               createdAt: "9/21/2026, 6:27:10 AM",
          },
          {
               id: 5,
               subject: "UI Alignment Bug on Safari",
               description: "Navigation bar icons overlap on desktop Safari browser version 17.",
               status: "closed",
               priority: "low",
               createdAt: "9/21/2026, 6:28:30 AM",
          },
     ];

     // nextTicketId
     private nextTicketId: number = 6;

     // getAllTickets
     getAllTickets(status?: Ticket['status'], priority?: Ticket['priority']) {
          let tickets = this.dummyTickets;

          if(status) {
               tickets = tickets.filter((ticket) => ticket?.status === status);
          }

          if(priority) {
               tickets = tickets.filter((ticket) => ticket?.priority === priority);
          }

          return tickets;
     }

     // getTicketById
     getTicketById(id: number) {
          const ticket = this.dummyTickets.find((ticket) => ticket?.id === id);

          if(!ticket) {
               throw new NotFoundException(`Ticket with id ${id} not found!`)
          }

          return ticket;
     }

     // createTicket
     createTicket(createTicketDto: CreateTicketDto) {
          const ticket: Ticket = {
               id: this.nextTicketId++,
               subject: createTicketDto?.subject,
               description: createTicketDto?.description,
               status: 'open',
               priority: createTicketDto?.priority,
               createdAt: new Date().toLocaleString('en-US')
          }

          this.dummyTickets.push(ticket);
          return this.dummyTickets;
     }

     // deleteTicketById
     deleteTicketById(id: number) {
          const ticketIndex = this.dummyTickets.findIndex((ticket) => ticket?.id === id);

          if(ticketIndex === -1) {
               throw new NotFoundException(`Ticket with id ${id} not found!`)
          }

          this.dummyTickets.splice(ticketIndex, 1);
          return {
               success: true,
               message: `Ticket with id ${id} has been deleted`
          }
     }

     // updateTicketById
     updateTicketById(id: number, updateTicketDto: UpdateTicketDto) {
          const ticketIndex = this.dummyTickets.findIndex((ticket) => ticket?.id === id);

          if(ticketIndex === -1) {
               throw new NotFoundException(`Ticket with id ${id} not found!`)
          }

          const existingTicket = this.dummyTickets[ticketIndex];

          const updatedTicket: Ticket = {
               ...existingTicket,
               ...updateTicketDto
          };

          this.dummyTickets[ticketIndex] = updatedTicket;
          return this.dummyTickets;
     }
}
