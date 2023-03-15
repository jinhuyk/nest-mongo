import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CountService } from 'src/count/count.service';
import { CountModule } from 'src/count/count.module';
@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
            CountModule],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
