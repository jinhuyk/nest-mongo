import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Count, CountDocument } from './schemas/cout.schema';

@Injectable()
export class CountService {
    constructor(@InjectModel(Count.name) private countModel: Model<CountDocument>){
      
        
    }
    async getCount(){
        console.log("hello connected Count Service");
    }
}
