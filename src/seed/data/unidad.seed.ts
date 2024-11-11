import { Unidad } from 'src/unidad/entities/unidad.entity';
import { v4 as uuid } from 'uuid';

export const UNIDAD_SEED: Unidad[] = [
    {
        id: uuid(),
        numero: 4,
        nombre: 'olmos',
    },
    {
        id: uuid(),
        numero: 3,
        nombre: 'magdalena',
    }, {
        id: uuid(),
        numero: 2,
        nombre: 'lujan',
    }, {
        id: uuid(),
        numero: 1,
        nombre: 'mercedes',
    },
   
]