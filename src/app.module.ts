import { Module } from '@nestjs/common';
import { TicketsModule } from './tickets/tickets.module.js';
import { TasksModule } from './tasks/tasks.module.js';
import { UsersModule } from './users/users.module.js';
import { DatabaseModule } from './database/database.module.js';
import { CoreModule } from './core/core.module.js';

@Module({
  imports: [TicketsModule, TasksModule, UsersModule, DatabaseModule, CoreModule],
})
export class AppModule {}
