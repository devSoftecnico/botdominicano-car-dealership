import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDTO, UpdateCarDTO } from './dtos';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla',
        //     price: 150000
        // },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Carro con id: '${id}' no encontrado`);

        return car;
    }

    create(createCarDto: CreateCarDTO) {
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(car);

        return car;
    }

    update(id: string, updateCarDTO: UpdateCarDTO) {
        let carDB = this.findOneById(id);

        if (updateCarDTO.id && updateCarDTO.id !== id)
            throw new BadRequestException(`El id no es válido.`)


        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB, ...updateCarDTO, id
                }

                return car;
            }
        });

        return carDB;
    }

    delete(id: string) {
        const car = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);

    }

    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }
}
