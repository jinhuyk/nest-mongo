import {IsString, IsNumber} from 'class-validator'

export class CreateCatDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly age: number;
    
    @IsString({each:true})
    readonly breed: string;
}