import { Cv } from "../../cv/entities/cv.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as idv4 } from 'uuid';

@Entity()
export class Skill {

    @PrimaryGeneratedColumn()
    id = idv4();

    @Column()
    designation: string;

    @ManyToMany(() => Cv,{cascade: true})
    @JoinTable({
        name: 'cvs_skills',
        joinColumn: { name: 'Skill', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'Cv', referencedColumnName: 'id' },
    })
    cv: Cv[];
}
