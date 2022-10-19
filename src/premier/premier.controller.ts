import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller('premier')
export class PremierController{

    @Get()
    methodGet():string{
        return 'Get';
    }
    @Post()
    methodPost():string{
        return 'Post';
    }
    @Put()
    methodPut():string{
        return 'Put';
    }
    @Delete()
    methodDelete():string{
        return 'Delete';
    }
    @Patch()
    methodPatch():string{
        return 'Patch';
    }

}