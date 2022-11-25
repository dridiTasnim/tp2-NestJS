import { IsNotEmpty, MinLength } from 'class-validator';
import { v4 as idv4 } from 'uuid';

export class CreateSkillDto {

    @IsNotEmpty()
    @MinLength(3, { message: 'taille minimum de designation 3' })
    designation: string;
    
}
