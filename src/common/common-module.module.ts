import { Global, Module } from '@nestjs/common';
import { TodoService } from '../todo-module/todoService';
import {v4 as uuidv4} from 'uuid';

const UUIDV4={
    useValue: uuidv4,
    provide: 'UUIDv4'
}

@Global()
@Module({
    imports:[],
    providers:[UUIDV4],
    controllers:[],
    exports:[UUIDV4],
})
export class CommonModule {}
