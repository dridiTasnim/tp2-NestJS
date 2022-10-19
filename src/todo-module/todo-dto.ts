import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ErrorMsg } from "./errorMsg";

export class TodoDto {
    @IsNotEmpty({
      message: ErrorMsg.EmptyString,
    })
    @MinLength(3,{
      message: ErrorMsg.LengthProblem,
    })
    @MaxLength(10,{
      message:ErrorMsg.LengthProblem,
    })
    name: string;

    @MinLength(10,{
      message: ErrorMsg.LengthProblem,
    })
    @IsNotEmpty({
      message: ErrorMsg.EmptyString,
    })
    description: string;
  }