import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService){}

    @Get()
    async getAll(): Promise<Cat[]>{
        return await this.catsService.getAll();
    }
    @Get('/:id')
    @Render('view.ejs')
    async getOne(@Param('id') catId: number) {
        let cat =  await this.catsService.getOne(catId);
        return {name : cat[0].name};
    }
    
    @Post()
    async create(@Body() catsData : CreateCatDto) {
        return await this.catsService.create(catsData);
    }
}
