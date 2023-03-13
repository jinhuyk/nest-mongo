import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';
@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>){}

    async getAll(): Promise<Cat[]>{
        return await this.catModel.find().exec();
    }

    async getOne(id:number) {
        return await this.catModel.find({"id" : id});
      } 
    
      async create(catsData: CreateCatDto) {
        let latestId = await this.catModel.findOne();
        return await this.catModel.create({...catsData, id : parseInt(latestId ? latestId.id : 0)+1});
      }
      async update(id: number, updateData : UpdateCatDto) {
        try {
          await this.catModel.where({"id" : id}).update(updateData);
          return true
        }
        catch(e) {
          return false
        }
      }

      async delete(id: number) {
        try {
          await this.catModel.remove({"id" : id});
          return true
        }
        catch(e) {
          return false
        }
      }
}
