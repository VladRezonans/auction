import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBidDto {
    @IsNotEmpty()
    @IsNumber()
    lotId: string;

    @IsNotEmpty()
    @IsNumber()
    proposedPrice: number;
}
