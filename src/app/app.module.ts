

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Aquí omitimos las llaves porque esta clase la exportamos por defecto
import PlateComponent from './shared/plate/plate.component';

import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import { ShadowDirective } from './shared/shadow.directive';
import { SortPipe } from './shared/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PlateComponent,
    ShadowDirective,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
