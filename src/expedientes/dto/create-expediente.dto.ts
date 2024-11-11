import { MinLength, IsString, IsNumber, IsBoolean } from "class-validator";

export class CreateExpedienteDto {
    @IsNumber()
    numero_expediente: number;

    @IsBoolean()
    ex_electronico: boolean;

    @IsNumber()
    año: number;

    @IsString()
    caratula: string

    @IsString()
    descripcion: string

    @IsString()
    tematica: string

    @IsString()
    unidad_id: string

    @IsString()
    fiscalia_id: string

    @IsNumber()
    ipp: number

    @IsString()
    estado: string

    @IsString()
    agentePublico: string

    @IsString()
    @MinLength(1)
    denunciante: string

    @IsString()
    observaciones_estado: string

}
