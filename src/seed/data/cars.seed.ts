import { Car } from "src/cars/interfaces/car.interfaces";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'toyota',
        model: 'corolla',
    },
    {
        id: uuid(),
        brand: 'honda',
        model: 'civix',
    },
    {
        id: uuid(),
        brand: 'fiat',
        model: '147',
    },
    {
        id: uuid(),
        brand: 'fiat',
        model: '128',
    }
]