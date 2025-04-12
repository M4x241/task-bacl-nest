import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { FirebaseModule } from 'nestjs-firebase';

@Module({
  imports: [
    UsersModule,
    TaskModule,
    AuthModule,
    ChatModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'TASK',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [CatsController],
  providers: [],
})
export class AppModule {}
