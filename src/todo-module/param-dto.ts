import { IsIn, IsOptional,} from "class-validator";
import { ErrorMsg } from "./errorMsg";
import { TodoStatusEnum } from "./todo-status-enum";

export class ParamDto {
   
    @IsOptional()
    data: string;

    @IsOptional()
    @IsIn([TodoStatusEnum.actif,TodoStatusEnum.done,TodoStatusEnum.waiting])
    status: TodoStatusEnum;
  }