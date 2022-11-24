import { BadGatewayException, BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoDto } from './todo-dto';
import { TodoModel } from './todo-model';
import { TodoStatusEnum } from './todo-status-enum';
import { UpdateTodoDto } from './todo-updateDto';

@Injectable()
export class TodoService {
    private todos: TodoModel[] = []
    constructor(
        @Inject('UUIDv4') uuidv4,
        @InjectRepository(TodoEntity)
        private todoRepository: Repository<TodoEntity>
    ) { }

    findByID(id: number) {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        return todo;
    }

    getTodo(): TodoModel[] {
        return this.todos;
    }

    async getTodov2(): Promise<TodoEntity[]> {
        return await this.todoRepository.find();
    }

    async getTodosPaginated(param): Promise<TodoEntity[]> {
        return await this.todoRepository.find({ skip: (param.page - 1) * param.take, take: param.take });
    }

    async getTodov3(statusParam, data): Promise<TodoEntity[]> {
        const qb= this.todoRepository.createQueryBuilder("TodoEntity");
        qb.where(`TodoEntity.name LIKE "%${data}%" `, { data: data })
        .orWhere(`TodoEntity.description LIKE "%${data}%" `, { data: data })
        .orWhere("TodoEntity.status= :statusParam", { statusParam: statusParam });
        if(! qb.getMany()) throw new NotFoundException();
        return await qb.getMany();
    }

    /*async getTodov3(statusParam, data): Promise<TodoEntity[]> {
        return await this.todoRepository.find({
            where: [
                {
                    status: statusParam,
                },
                {
                    name: Like(`%${data}%`),

                },
                {
                    description: Like(`%${data}%`),
                }

            ]
        });
    }*/

    async getTodoByStatusAndData(statusParam, data): Promise<TodoEntity[]> {
        return await this.todoRepository.find({
            where: [
                {
                    name: Like(`%${data}%`),
                },
                {
                    description: Like(`%${data}%`),
                    status: statusParam,
                }

            ]
        });
    }

    getTodoByID(id: number) {
        return this.findByID(id);
    }

    async getTodoByIDv2(id: number): Promise<TodoEntity> {
        const todo = await this.todoRepository.findOne({ where: [{ id: id }] });
        if (!todo) throw new BadRequestException;
        return todo;
    }

    deleteTodoByID(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        return 'deleted';
    }

    async deleteTodoByIDv2(id: number) {
        return await this.todoRepository.delete(id);
    }

    async softDeleteTodoByID(id: number) {
        return await this.todoRepository.softDelete(id);
    }

    async restoreTodoByID(id: number) {
        return await this.todoRepository.restore(id);
    }

    async countByStatus() {

        return "actif :" + await this.todoRepository.countBy({ status: TodoStatusEnum.actif }) +
            " waiting : " + await this.todoRepository.countBy({ status: TodoStatusEnum.waiting }) +
            " done : " + await this.todoRepository.countBy({ status: TodoStatusEnum.done })
    }

    addTodoWithDTO(newTodoDto: TodoDto) {
        const todo = new TodoModel();
        todo.name = newTodoDto.name;
        todo.description = newTodoDto.description;
        this.todos.push(todo);
        return 'todo is added';
    }

    async addTodoDTOv2(newTodoDto: TodoDto): Promise<TodoEntity> {
        return await this.todoRepository.save(newTodoDto);
    }

    updateTodoDto(id: number, updateTodoDto: UpdateTodoDto) {
        const todo = this.todos.find((todo) => todo.id == id);
        todo.name = updateTodoDto.name ?? todo.name;
        todo.description = updateTodoDto.description ?? todo.description;
        todo.status = updateTodoDto.status ?? todo.status;
        return todo;
    }

    async updateTodoDtov2(id: number, updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {

        const newTodo = await this.todoRepository.preload({ id, ...updateTodoDto });
        if (!newTodo) throw new NotFoundException;
        return await this.todoRepository.save(newTodo);
    }

}