import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
 
   constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>
   ){}

    async findAll() {
        const students = this.studentsRepository.find();
        return students;
    }

    async getStudentById(id: number){
       const student = await this.findOne(id);
       return student;
    }

    async create(body: CreateStudentDto) {
        const newStudent = await this.studentsRepository.save(body);
        return newStudent;
    }

    async delete(id: number) {
        const student = await this.findOne(id);
        await this.studentsRepository.delete(student.id);
        return {
            'message': 'Student deleted successfully!!!'
        };
    }

    async update(id: number, changes: UpdateStudentDto) {
        const student = await this.findOne(id);
        const updatedStudent = this.studentsRepository.merge(student, changes);
        return this.studentsRepository.save(updatedStudent);
    }

    private async findOne(id: number) {
        const student = await this.studentsRepository.findOneBy({ id });
        if(!student) {
           throw new NotFoundException(`Student with id ${id} not found`);
        }
        return student;
    }
}
