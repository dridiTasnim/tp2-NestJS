import { CvController } from "src/cv/cv.controller";
import { Cv } from "../../cv/entities/cv.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id : number;

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
