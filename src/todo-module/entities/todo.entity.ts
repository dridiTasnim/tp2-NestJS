import { timeStamp } from "console";
import { TimeStamp } from "../../date-management/time-stamp";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TodoStatusEnum } from "../todo-status-enum";

@Entity()
export class TodoEntity extends TimeStamp {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({type: 'enum',enum: TodoStatusEnum})
    status : TodoStatusEnum;
}
