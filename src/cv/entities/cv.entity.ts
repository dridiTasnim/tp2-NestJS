import { User } from "../../user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as idv4 } from 'uuid';

@Entity()
export class Cv {
    @PrimaryGeneratedColumn()
    id = idv4();

    @Column()
    name: string;

    @Column()
    firstname: string;

    @Column()
    age: number;

    @Column()
    cin: number;

    @Column()
    job: string;

    @Column()
    path: string;

    @ManyToOne(type => User,(user) => user.cvs)
    user: User;
}
