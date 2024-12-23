import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UsersModule, TaskModule, AuthModule, ChatModule],
  controllers: [CatsController],
  providers: [],
})
export class AppModule {}
