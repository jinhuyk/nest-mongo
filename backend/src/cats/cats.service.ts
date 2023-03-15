import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountService } from 'src/count/count.service';
import { Count, CountDocument } from 'src/count/schemas/count.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';
@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>,
                private readonly countService : CountService){}

    async getAll(): Promise<Cat[]>{
        return await this.catModel.find().exec();
    }

    async getOne(id:number) {
        return await this.catModel.find({"_id" : id});
      } 
    
      async create(catsData: CreateCatDto) {
        const newId : number = await this.countService.getCount()+1;
        await this.catModel.create({...catsData, _id : newId});
        const updateNewId = JSON.parse(`{ "count" : ${newId} }`);
        await this.countService.updateCount(updateNewId);
        return true;

      }
      async update(id: number, updateData : UpdateCatDto) {
        try {
          await this.catModel.where({"_id" : id}).update(updateData);
          return true
        }
        catch(e) {
          return false
        }
      }

      async delete(id: number) {
        try {
          await this.catModel.remove({"_id" : id});
          return true
        }
        catch(e) {
          return false
        }
      }
}
