import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

interface Student {
    id: string;
    name: string;
    email: string;
}

@Controller('students')
export class StudentsController {

    private students: Student[] = [
        {
            id: '1',
            name: 'Franklin Jiménez',
            email: 'frank@udenar.edu.co',
        },
        {
            id: '2',
            name: 'Juan Pérez',
            email: 'juan@udenar.edu.co',
        },
        {
            id: '3',
            name: 'Pedro Gómez',
            email: 'pedro@udenar.edu.co',
        },
    ];

    @Get()
    getStudents(): Student[] {
        return this.students;
    }

    @Get(':id')
    getStudent(@Param('id') id: string) {
        const student = this.students.find((student) => student.id === id);
        if(!student) {
            return {'message': 'Student not found!!!'};
        }
        return student;
    }

    @Post()
    createStudent(@Body() body: Student) {
        const newStudent = {
            ...body,
            id: `student_${this.students.length + 1}`, 
        }
        this.students.push(newStudent);
        return newStudent;
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        const position = this.students.findIndex((student) => student.id === id);
        if(position === -1) {
            return {'message': 'Student not found!!!'};
        }
        this.students.splice(position, 1);
        return {
            'message': 'Student deleted successfully!!!'
        };
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() changes: Student) {
        const position = this.students.findIndex((student) => student.id === id);
        if(position === -1) {
            return {'message': 'Student not found!!!'};
        }
        const currentData = this.students[position];
        const updatedStudent = {
            ...currentData,
            ...changes,
        }
        this.students[position] = updatedStudent;
        return updatedStudent;
    }

   
}
