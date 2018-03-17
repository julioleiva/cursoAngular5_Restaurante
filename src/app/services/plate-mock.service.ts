import { Injectable } from '@angular/core';

// Aquí el import va sin llaves
import Plate from '../models/plate.model';

// Este decorador sirve para decir que este servicio es subceptible de recibir Injección de dependencias
// Le obliga 
@Injectable()
// https://angular.io/api/common/http/HttpClient
export class PlateMockService {   

    // La inyección de dependencias se hace en el constructor
    constructor() {

     }

    getAll(): Promise<Plate[]>{
        // Devolvemos una promesa Mockeada
       return Promise.resolve([
        {
            id: 1,
            name: 'Lasagna',
            description: 'Description',
            celiac: false,
            image: 'https://crujienteyaldente.com/wp-content/uploads/2017/03/lasana-de-carne-con-verduras.jpg',
            numIngredients: 3,
            category: 'main_dish',
            createdAt: new Date()
          }
       ])
    }
    getById(): Promise<Plate[]>{
        return null;

    }
    create(): Promise<Plate[]>{
        return null;
    }
    update(): Promise<Plate[]>{
        return null;
    }
    remove(): Promise<Plate[]>{
        return null;
    }

} {   

    

}