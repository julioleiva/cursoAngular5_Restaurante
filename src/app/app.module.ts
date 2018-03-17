// 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';



// Componentes, módulos, servicios, pipes, mocks... propios
import { PlateFormComponent } from './shared/plate-form/plate-form.component';
import { TokenInterceptor } from './services/token.interceptor';
import { PlateMockService } from './services/plate-mock.service';
import { PlateService } from './services/plate.service';
import { ShadowDirective } from './shared/shadow.directive';
import { SortPipe } from './shared/sort.pipe';
// Aquí omitimos las llaves porque esta clase la exportamos por defecto
import PlateComponent from './shared/plate/plate.component';


// Formularios- AngularMaterial
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CustomFormsModule } from 'ng2-validation'


@NgModule({
  declarations: [
    AppComponent,
    PlateComponent,
    ShadowDirective,
    SortPipe,
    PlateFormComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    CustomFormsModule

  ],

  // Aquí se inyectan los servicios
  providers: [
   // Llamada al servicio que hace uso de Http
    PlateService,

    // De esta manera forzamos a que se haga uso del Mock cuando no hay back
    // {provide: PlateService, useClass: PlateMockService}

    // Para usar el interceptor que se ha creado en token.interceptor.ts
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
