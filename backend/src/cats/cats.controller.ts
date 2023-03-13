import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Get()
    async getAll(): Promise<Cat[]>{
        return await this.catsService.getAll();
    }
}
