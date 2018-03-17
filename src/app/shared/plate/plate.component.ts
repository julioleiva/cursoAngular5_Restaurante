import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import Plate from '../../models/plate.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'res-plate',
    templateUrl: './plate.component.html',
    // template: `
    //     <img [src]="url">
    //     <button (click)="onClick(input)">Fijar nombre</button><br>
    //     <button (click)="hide(input)">Hide</button>
    //     <input [value]="input.value" #input>
    //     <h1>Hola {{input.value}}</h1>
    // `,
    styleUrls: ['./plate.component.css']
})
export default class PlateComponent {


   // De padre a hijo
    @Input() plate: Plate;

   @Output() delete: EventEmitter<Plate> = new EventEmitter();
   @Output() edit: EventEmitter<Plate> = new EventEmitter();
   @Output() hover: EventEmitter<Plate> = new EventEmitter();

   @ViewChild ('card') card;
   @ViewChild ('button') button;

  // De hijo a padre
   onEdit() {
    this.edit.emit(this.plate);
   }

   onDelete() {
    this.delete.emit(this.plate);
   }
   onMouseOver() {
    this.hover.emit(this.plate);
   }
}

