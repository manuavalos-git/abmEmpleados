import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/layout/error-dialog/error-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-empleado-table',
  templateUrl: './empleado-table.component.html',
  styleUrls: ['./empleado-table.component.css']
})
export class EmpleadoTableComponent implements OnInit {
  empleados: Array<Empleado>=[];

  constructor(private empleadoService:EmpleadoService,private snackBar: MatSnackBar,public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  navegarAgregarEmpleado(){
    this.router.navigate(['/agregar-empleado']);
  }

  navegarActualizarEmpleado(id : Number){
    this.router.navigate([`/actualizar-empleado/${id}`]);
  }

  obtenerEmpleados(){
    this.empleadoService.getEmpleados().subscribe({
      next: res => {
        const empleadosTemp = res;
        this.empleados=empleadosTemp;
      },
      error: error => {
        const messages = error.error && error.error.messages ? error.error.messages : ['Ha ocurrido un error.'];
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
          data: { message: messages}
        });
      }
    });
  }

  eliminarEmpleado(idEmpleado : Number){
    this.empleadoService.removeEmpleado(idEmpleado).subscribe({
      next: res => {
        this.snackBar.open('El empleado fue eliminado con éxito.', 'Cerrar', {
          duration: 3000, // duración en milisegundos
        });
        this.obtenerEmpleados();
      },
      error: error => {
        const messages = error.error && error.error.messages ? error.error.messages : ['Ha ocurrido un error.'];
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
          data: { message: messages }
        });
      }
    });
  }
}
