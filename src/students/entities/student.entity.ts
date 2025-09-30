import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'students',
})
export class Student{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar', length:255})
    name:string;

    @Column({type:'varchar', length:255})
    email:string;

    @CreateDateColumn({
        type:'timestamptz',
        default:()=>'CURRENT_TIMESTAMP',
        name:'create_at',
    })
    createAt: Date;

    @CreateDateColumn({
        type:'timestamptz',
        default:()=>'CURRENT_TIMESTAMP',
        name:'update_at',
    })
    updateAt: Date;
}