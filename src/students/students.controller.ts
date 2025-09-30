import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';
import { StudentsService } from './students.service';



@Controller('students')
export class StudentsController {

   constructor(private studentsService: StudentsService) {}

    @Get()
    getStudents() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findStudent(@Param('id', ParseIntPipe) id: number){
       return this.studentsService.getStudentById(id);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto){
        return this.studentsService.create(body);
    }
    
    @Delete(':id')
    deleteStudent(@Param('id', ParseIntPipe) id: number){
        return this.studentsService.delete(id);
    }   

    @Put(':id')
    updateStudent(@Param('id', ParseIntPipe) id: number, @Body() changes: UpdateStudentDto){
        return this.studentsService.update(id, changes);
    }

   
}
