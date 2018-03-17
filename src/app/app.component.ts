import { PlateService } from './services/plate.service';
import { Component, OnInit } from '@angular/core';
import Plate from './models/plate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  public value = 3;

  items = [];
  
  // En el constructor se lleva a cabo la inyección de dependencias
  constructor(private plateService: PlateService){
  }

  // El ngOnInit Se ejecuta después del constructor
  // Marcamos este método como asícrono para gestionar la promesa de la respuesta
  async ngOnInit(){
    // 
    this.items = await this.plateService.getAll();
  }

onDeletePlate(plate) {
  console.log('delete', plate);
}
onEditPlate(plate) {
  console.log('edit', plate);
}
onShadowMouseLeave() {
  console.log('Leave');
}
onClick() {

  this.items = this.items.map(plate => {
    if (plate.name === 'Zamburiñas') {
      return Object.assign({}, plate, {numIngredients: 10});
    }
    return plate;
  })
  this.items[0].numIngredients = 10;
}

}
