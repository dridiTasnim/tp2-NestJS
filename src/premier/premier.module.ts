import { Module } from "@nestjs/common";
import { PremierController } from "./premier.controller";

@Module({
    imports:[],
    providers:[],
    controllers:[PremierController],
    exports:[],
})

export class PremierModule{}