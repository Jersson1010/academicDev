import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentsService } from './students/students.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private studentService: StudentsService,
    private readonly configService: ConfigService
  ) {}

  @Get()
  getHello(): string {
    const myVar = this.configService.get<string>('MY_VAR');
    return `${myVar}`;
    // return this.appService.getHello();
  }

  @Get('/my-test')
  students() {
    return this.studentService.findAll();
  }
}
