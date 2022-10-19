import { PartialType } from "@nestjs/mapped-types";
import { TodoDto } from "./todo-dto";
import { TodoStatusEnum } from "./todo-status-enum";
import { IsIn, IsOptional } from "class-validator";
import { isInt16Array } from "util/types";
export class UpdateTodoDto extends PartialType(TodoDto) {

    @IsOptional()
    @IsIn([TodoStatusEnum.actif,TodoStatusEnum.done,TodoStatusEnum.waiting])
    status: TodoStatusEnum;
  }