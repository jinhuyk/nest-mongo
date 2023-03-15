import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCountDto } from './dto/update-count.dto';
import { Count, CountDocument } from './schemas/count.schema';

@Injectable()
export class CountService {
    constructor(@InjectModel(Count.name) private countModel: Model<CountDocument>){
      
        
    }
    async getCount(): Promise<number>{
        let count = await this.countModel.find().exec();
        console.log(count);
        return count[0].count;
    }
    async updateCount(newid: UpdateCountDto ){
        try{
            await this.countModel.where({"name": "count"}).updateOne(newid);
            return true;
        }
        catch(e){
            return false;
        }
    }
}