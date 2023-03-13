import { Controller, Get, Render } from '@nestjs/common';

@Controller('view')
export class ViewController {
  @Get()
  @Render('view.ejs')
  async view() {
    return { name: 'Jinhyuk', age: 21, job: 'full?stack'};

  }
}