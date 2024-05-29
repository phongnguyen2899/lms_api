import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class DocumentDto {
  @IsNumberString()
  public id!: number;

  @IsOptional()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public file_name: string;

  @IsOptional()
  @IsNumberString()
  public file_type: number;
}
