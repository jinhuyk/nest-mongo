import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewController } from './views/views.controller';
import {MongooseModule} from '@nestjs/mongoose'
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:qwer1234@cluster0.zcxdyj2.mongodb.net/?retryWrites=true&w=majority'), CatsModule],
  controllers: [AppController, ViewController],
  providers: [AppService],
})
export class AppModule {}
