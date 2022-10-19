import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoDto } from "./todo-dto";
import { TodoModel } from "./todo-model";
import { UpdateTodoDto } from "./todo-updateDto";
import { TodoService } from "./todoService";

@Controller('todo')
export class TodoController{
    private todos : TodoModel[]=[];
    constructor(private readonly todoService: TodoService) {}
   
    @Get()
    getTodos(){
        return this.todoService.getTodo();
    }

    @Get('/:id')
    getTodoByID(@Param() parameters){
        return this.todoService.getTodoByID(parameters);
    }

    @Delete('/:id')
    deleteTodoByID(@Param() parameters){
        return this.todoService.deleteTodoByID(parameters);
    }

    @Post()
    addTodoWithDto(@Body() newTodoDto : TodoDto){
        return this.todoService.addTodoWithDTO(newTodoDto);
    }

    @Put('/:id')
    updateTodoDto(@Param() id: string, @Body() updateTodoDto:UpdateTodoDto ){
          return this.todoService.updateTodoDto(id,updateTodoDto);
    }
}