import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PremierModule} from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { CommonModule } from './common-module/common-module.module';
import { CustomPipeController } from './pipes/custom-pipe/custom-pipe.controller';

@Module({
  imports: [PremierModule, TodoModuleModule, CommonModule],
  controllers: [AppController, CustomPipeController],
  providers: [AppService],
})
export class AppModule {}
