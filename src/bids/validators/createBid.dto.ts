import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateBidDto {
    @IsNotEmpty()
    @IsNumber()
    lotId: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    proposedPrice: number;
}
