import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewController } from './views/views.controller';

@Module({
  imports: [],
  controllers: [AppController, ViewController],
  providers: [AppService],
})
export class AppModule {}
