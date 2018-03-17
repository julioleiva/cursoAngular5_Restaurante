import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Aquí el import va sin llaves
import Plate from '../models/plate.model';

// Este decorador sirve para decir que este servicio es subceptible de recibir Injección de dependencias
// Le obliga 
@Injectable()
// https://angular.io/api/common/http/HttpClient
export class PlateService {

    API_URL = 'http://localhost:3000/api';

    // La inyección de dependencias se hace en el constructor
    constructor(private http: HttpClient) {

     }

    getAll(): Promise<Plate[]>{
        // Aquí hacemos un CASTING
       return <Promise<Plate[]>>this.http.get(`${this.API_URL}/plate`).toPromise();
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

}