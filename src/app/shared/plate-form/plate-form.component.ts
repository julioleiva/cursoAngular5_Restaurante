import { Component, ViewChild } from '@angular/core';

@Component( {
    selector: 'res-plate-form',
    templateUrl: './plate-form.component.html',
    styleUrls: ['./plate-form.component.css']
})
export class PlateFormComponent { 
        // Recogemos el nombre que le hemos dado al formulario en el template    
        // @ViewChild('form')   
        
        // https://github.com/yuyang041060120/ng2-validation

        categories: string [] = ['Dessert', 'Main Food']
}
