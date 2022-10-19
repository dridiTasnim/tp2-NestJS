import { TodoStatusEnum } from "./todo-status-enum";
import {v4 as uuidv4} from 'uuid';
export class TodoModel{
    id: string = uuidv4;
    name:string;
    description:string;
    creationDate: string= Date();
    status: TodoStatusEnum = TodoStatusEnum.waiting;
}