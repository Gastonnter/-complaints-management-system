import { IsOptional, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  // @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: `the brand most be a cool string` })
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  //@MinLength(3) agregar n decorados;
  readonly model?: string;
}
