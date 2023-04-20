import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoFormAddComponent } from './components/empleado-form-add/empleado-form-add.component';
import { EmpleadoTableComponent } from './components/empleado-table/empleado-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '../layout/layout.module';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmpleadoFormUpdateComponent } from './components/empleado-form-update/empleado-form-update.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';
import { MatIconModule } from '@angular/material/icon';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
       EmpleadoFormAddComponent,
       EmpleadoTableComponent,
       ListarEmpleadosComponent,
       AgregarEmpleadoComponent,
       EmpleadoFormUpdateComponent,
       ActualizarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AbmEmpleadosModule { }
