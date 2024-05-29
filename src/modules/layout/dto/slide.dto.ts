import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SlideDto {
  @IsNumber()
  public id!: number;

  @IsOptional()
  @IsString()
  public image_url: string;
}
