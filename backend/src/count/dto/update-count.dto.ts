import { Type } from 'class-transformer';
import {IsString, IsNumber} from 'class-validator'

export class CreateCatDto {
    @IsNumber()
    readonly age: number;
}