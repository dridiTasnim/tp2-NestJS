import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TodoDto } from './todo-dto';
import { TodoModel } from './todo-model';
import { UpdateTodoDto } from './todo-updateDto';

@Injectable()
export class TodoService{
    private todos: TodoModel[] = []
    constructor(@Inject ('UUIDv4') uuidv4){}
    findByID(id: string){
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        return todo;
    }

    getTodo(): TodoModel[] {
        return this.todos;
    }

    getTodoByID(parameters){
        return this.findByID(parameters.id);
    }

    deleteTodoByID(parameters){
        this.todos= this.todos.filter((todo)=>todo.id !== parameters.id);
        return 'deleted';
    }

    addTodoWithDTO(newTodoDto : TodoDto){
        const todo = new TodoModel();
        todo.name = newTodoDto.name;
        todo.description = newTodoDto.description;
        this.todos.push(todo);
        return 'todo is added';
    }
    updateTodoDto( id: string,  updateTodoDto:UpdateTodoDto){
        const todo= this.todos.find((todo)=> todo.id== id);
        todo.name=updateTodoDto.name ?? todo.name ;
        todo.description = updateTodoDto.description ?? todo.description;
        todo.status = updateTodoDto.status ?? todo.status;
          return todo;
    }

}