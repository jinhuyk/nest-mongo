import { Type } from 'class-transformer';
import {IsString, IsNumber} from 'class-validator'

export class UpdateCountDto {
    @IsNumber()
    readonly count: number;
}