import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountController } from './count.controller';
import { CountService } from './count.service';
import { Count, CountSchema } from './schemas/count.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Count.name, schema: CountSchema }])],
  controllers: [CountController],
  providers: [CountService],
  exports: [CountService]
})
export class CountModule {}
