import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module.js';
import { UsersModule } from '../users/users.module.js';

@Module({
     imports: [DatabaseModule, UsersModule],
     exports: [DatabaseModule, UsersModule]
})
export class CoreModule {}
