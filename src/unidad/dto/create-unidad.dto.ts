import { IsNumber, IsString, MinLength } from "class-validator";


export class CreateUnidadDto {
    @IsNumber()
    numero: number

    @IsString()
    @MinLength(1)
    nombre: string
}
