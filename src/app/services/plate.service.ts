import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Aquí el import va sin llaves
import Plate from '../models/plate.model';

// Este decorador sirve para decir que este servicio es subceptible de recibir Injección de dependencias
// Le obliga 
@Injectable()

export class PlateService {
   

    // La inyección de dependencias se hace en el constructor
    // https://angular.io/api/common/http/HttpClient
    constructor(private http: HttpClient) {

     }

    getAll(): Promise<Plate[]>{
        // Aquí hacemos un CASTING
       return <Promise<Plate[]>>this.http.get(`${environment.apiUrl}/plate`).toPromise();
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