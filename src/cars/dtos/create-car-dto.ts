import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `the brand most be a cool string` })
  readonly brand: string;
  @IsString()
  //@MinLength(3) agregar n decorados;
  readonly model: string;
}
