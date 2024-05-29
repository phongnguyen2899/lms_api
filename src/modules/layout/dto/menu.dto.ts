import { IsNumber, IsOptional, IsString } from 'class-validator';

export class MenuDto {
  @IsNumber()
  public id!: number;

  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public link: string;

  @IsOptional()
  @IsNumber()
  public order: number;
}
