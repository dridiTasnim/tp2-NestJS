import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Version, Query } from "@nestjs/common";
import { TodoEntity } from "./entities/todo.entity";
import { ParamDto } from "./param-dto";
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

    @Get()
    @Version('2')
    getTodosv2() : Promise<TodoEntity[]>{
        return  this.todoService.getTodov2();
    }

    @Get('/:id')
    getTodoByID(@Param('id', ParseIntPipe) id : number){
        return this.todoService.getTodoByID(id);
    }

    @Get('/:id')
    @Version('2')
    async getTodoByIDv2(@Param('id', ParseIntPipe) id : number){
        return await this.todoService.getTodoByIDv2(id);
    }

    @Get('/:page/:take')
    async getTodosPaginated(@Param() params){
        return await this.todoService.getTodosPaginated(params);
    }

    @Get('/restore/:id')
    async restoreTodoByID(@Param('id', ParseIntPipe) id : number){
        return await this.todoService.restoreTodoByID(id);
    }

    @Get('/param?')
    @Version('3')
    async getTodoByParam(@Query() queryParam: ParamDto): Promise<TodoEntity[]> {
        const {status,data}=queryParam;
        return await this.todoService.getTodov3(status,data);
    }

    @Get('/param?')
    @Version('4')
    async getTodoByStatusAndData(@Query() queryParam: ParamDto): Promise<TodoEntity[]> {
        const {status,data}=queryParam;
        return await this.todoService.getTodoByStatusAndData(status,data);
    }

    /*@Get('/count')
    @Version('2')
    countTodoByStatus() {
        return this.todoService.countByStatus()
    }*/

    @Post()
    @Version('1')
    addTodoWithDto(@Body() newTodoDto : TodoDto){
        return this.todoService.addTodoWithDTO(newTodoDto);
    }

    @Post()
    @Version('2')
    addTodoDtov2(@Body() newTodoDto : TodoDto) : Promise<TodoEntity>{
        return  this.todoService.addTodoDTOv2(newTodoDto);
    }

    @Put('/:id')
    updateTodoDto(@Param('id',ParseIntPipe) id: number, @Body() updateTodoDto:UpdateTodoDto ){
          return this.todoService.updateTodoDto(id,updateTodoDto);
    }

    @Put('/:id')
    @Version('2')
    async updateTodoDtov2(@Param('id',ParseIntPipe) id: number, @Body() updateTodoDto:UpdateTodoDto ) {
          return await this.todoService.updateTodoDtov2(id,updateTodoDto);
    }

    @Delete('/:id')
    deleteTodoByID(@Param('id', ParseIntPipe) id : number){
        return this.todoService.deleteTodoByID(id);
    }

    @Delete('/:id')
    @Version('2')
    async deleteTodoByIDv2(@Param('id', ParseIntPipe) id : number){
        return await this.todoService.deleteTodoByIDv2(id);
    }

    @Delete('/softDelete/:id')
    async softDeleteTodoByID(@Param('id', ParseIntPipe) id : number){
        return await this.todoService.softDeleteTodoByID(id);
    }
}