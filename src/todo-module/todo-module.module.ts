import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common-module/common-module.module';
import { TodoController } from './todo-module.controller';
import { TodoService } from './todoService';

@Module({
    imports:[CommonModule],
    exports:[],
    controllers:[TodoController],
    providers:[TodoService]
})
export class TodoModuleModule {}
