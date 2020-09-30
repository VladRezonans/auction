import { IsNotEmpty, IsOptional, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateLotDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  image?: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  estimatedPrice: number;

  @IsNotEmpty()
  @IsDateString()
  startAt: Date;

  @IsNotEmpty()
  @IsDateString()
  endAt: Date;
}
