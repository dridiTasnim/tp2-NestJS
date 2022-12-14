import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../common/common-module.module';
import { TodoEntity } from './entities/todo.entity';
import { TodoController } from './todo-module.controller';
import { TodoService } from './todoService';

@Module({
    imports:[
        CommonModule,
        TypeOrmModule.forFeature([TodoEntity])
    ],
    exports:[],
    controllers:[TodoController],
    providers:[TodoService]
})
export class TodoModuleModule {}
