import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PremierModule} from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { CommonModule } from './common/common-module.module';
import { CustomPipeController } from './custom-pipe/custom-pipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo-module/entities/todo.entity';
import { CvModule } from './cv/cv.module';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    PremierModule,
    TodoModuleModule,
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'todo',
      //entities: [TodoEntity],
      autoLoadEntities: true,
      synchronize: true,
      }),
    CvModule,
    UserModule,
    SkillModule
  ],
  controllers: [
    AppController,
    CustomPipeController
  ],
  providers: [AppService],
})
export class AppModule {}
