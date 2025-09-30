import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateStudentDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}

export class UpdateStudentDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsEmail()
    @IsOptional()
    email: string;
}