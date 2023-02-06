import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';


export const CARS_SEED: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla', price: 150.000 },
    { id: uuid(), brand: 'Honda', model: 'Civic', price: 150.000 },
    { id: uuid(), brand: 'Jeep', model: 'Cherokee', price: 150.000 },
];