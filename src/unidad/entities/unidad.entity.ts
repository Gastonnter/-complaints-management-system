import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'Unidad'})
export class Unidad {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    numero?: number;


    @Column()
    nombre?: string;
}
