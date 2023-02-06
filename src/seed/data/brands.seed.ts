import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';


export const BRANS_SEED: Brand[] = [
    { id: uuid(), name: 'Volvo', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Kia', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Sonata', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Honda', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Toyota', createdAt: new Date().getTime() },
    { id: uuid(), name: 'Tesla', createdAt: new Date().getTime() },
];