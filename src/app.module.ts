import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/entities/student.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory:(configService:ConfigService)=>({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blog_user',
      password: 'blog_password',
      database: 'my_blog_db',
      autoLoadEntities: true,
      synchronize: true,
      }),
      inject:[ConfigService]
    }),
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [AppController, StudentsController],
  providers: [AppService, StudentsService],
})
export class AppModule {}
