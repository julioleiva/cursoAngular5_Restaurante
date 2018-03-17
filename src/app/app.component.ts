import { Component } from '@angular/core';
import Plate from './models/plate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public value = 3;

  items: Plate [] =  [
    {
    name: 'Lasaña',
    description: 'A la boloñesa',
    createdAt: new Date(),
    celiac: true,
    numIngredients: 8,
    category: 'Pasta',
    image: 'https://www.gallinablanca.es/files/thumbs/6fa65995f2dbca95536d431c7f8527c2f5a20694_r900_480_2.jpg',
  },
  {
    name: 'Zamora',
    description: 'A la boloñesa',
    createdAt: new Date(),
    celiac: true,
    numIngredients: 8,
    category: 'Pasta',
    image: 'https://www.gallinablanca.es/files/thumbs/6fa65995f2dbca95536d431c7f8527c2f5a20694_r900_480_2.jpg',
  },
  {
    name: 'Llammmm',
    description: 'A la boloñesa',
    createdAt: new Date(),
    celiac: true,
    numIngredients: 8,
    category: 'Pasta',
    image: 'https://www.gallinablanca.es/files/thumbs/6fa65995f2dbca95536d431c7f8527c2f5a20694_r900_480_2.jpg',
  },
  {
    name: 'MiPrima',
    description: 'A la boloñesa',
    createdAt: new Date(),
    celiac: true,
    numIngredients: 8,
    category: 'Pasta',
    image: 'https://www.gallinablanca.es/files/thumbs/6fa65995f2dbca95536d431c7f8527c2f5a20694_r900_480_2.jpg',
  },
  {
    name: 'MeCagoenTusMuelas',
    description: 'A la boloñesa',
    createdAt: new Date(),
    celiac: true,
    numIngredients: 8,
    category: 'Pasta',
    image: 'https://www.gallinablanca.es/files/thumbs/6fa65995f2dbca95536d431c7f8527c2f5a20694_r900_480_2.jpg',
  },
  {
    name: 'HastaLuego',
    description: 'A la boloñesa',
    createdAt: new Date(),
    celiac: true,
    numIngredients: 8,
    category: 'Pasta',
    image: 'https://www.gallinablanca.es/files/thumbs/6fa65995f2dbca95536d431c7f8527c2f5a20694_r900_480_2.jpg',
  }
];
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
  this.items.map( plate => {
    if (plate.name = 'HastaLuego') {
      return Object.assign({}, plate, {numIngredients: 25});
    }
    return plate;
  });
  this.items[0].numIngredients = 10;
}

}
