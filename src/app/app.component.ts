import { PlateService } from './services/plate.service';
import { Component } from '@angular/core';
import Plate from './models/plate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public value = 3;

  items = [];
  
  // En el constructor 
  constructor(private plateService: PlateService){

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
