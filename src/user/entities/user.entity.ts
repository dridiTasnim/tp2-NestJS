import { CvController } from "src/cv/cv.controller";
import { Cv } from "../../cv/entities/cv.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as idv4 } from 'uuid';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id = idv4();

   /* @Column()
    designation: string;*/

    @Column()
    username: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @OneToMany(type=> Cv,(cv)=> cv.user)
    cvs: Cv
}
