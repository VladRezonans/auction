import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateOrderDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    arrivalLocation: string;

    @IsNotEmpty()
    @IsNumber()
    arrivalType: number;

    @IsNotEmpty()
    @IsNumber()
    status: number;
}
