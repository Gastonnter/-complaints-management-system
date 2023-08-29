import { Brand } from '../../brands/entities/brand.entity'
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: "VOLVO",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "CARRA",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "AUDI",
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "HONDA",
        createdAt: new Date().getTime(),
    },
]