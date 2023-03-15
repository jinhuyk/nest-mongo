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
        return await this.catModel.find({"_id" : id});
      } 
    
      async create(catsData: CreateCatDto) {
        let latestId = await this.catModel.findOne({});
        let la = await this.catModel.findOne({catNum : 1});
        console.log(la);
        return await this.catModel.create({...catsData, _id : parseInt(latestId ? latestId.id : 0)+1});
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
