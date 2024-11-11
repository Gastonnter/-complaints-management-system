import { CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity('Expedientes')
export class Expediente {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    numero_expediente: number;//numero de expediente

    @Column()
    ex_electronico?: boolean;//es electronico o papel

    @Column()
    año?: number;// se filtra por año para poder hacer un mejor filtro

    @Column()
    caratula?: string;// como se caratulo el expediente

    @Column()
    descripcion?:string;// breve relato del echo 

    @Column()
    tematica?:string;// 

    @Column()
    unidad_id?: string;// entidad de las unidades

    @Column()
    fiscalia_id?:string; // entidad de las fiscalias

    @Column()
    ipp?:number;//numero de la ipp por la que corre el expediente

    @Column()
    estado?:string;//esto es un enum "archivado""en tramite"

    @Column()
    agentePublico?:string;// entidad agentes involucrados en el echo

    @Column()
    denunciante?:string// entidad persona la cual realiza la denuncia

    @Column()
    observaciones_estado?:string;//esto indica en que area se encuentra el expediente
    
    @CreateDateColumn({
        name: 'creation_at',
        type:'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type:'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;
}
