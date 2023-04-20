import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { ErrorDialogComponent } from 'src/app/layout/error-dialog/error-dialog.component';
import { Empleado } from '../../model/empleado';

@Component({
  selector: 'app-empleado-form-update',
  templateUrl: './empleado-form-update.component.html',
  styleUrls: ['./empleado-form-update.component.css']
})
export class EmpleadoFormUpdateComponent implements OnInit {

  id: string;
  empleado?: Empleado;
  public formularioEmpleado: FormGroup;

  constructor(private formBuilder: FormBuilder,private empleadoService:EmpleadoService
    ,public dialog: MatDialog,private snackBar: MatSnackBar,private router: Router,private route: ActivatedRoute) {
    this.formularioEmpleado = this.formBuilder.group({
      nroDocumento: ['', [Validators.required,Validators.pattern(/^-?[0-9]\d*$/)]],
      nombre:['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/)]],
      apellido: ['',[Validators.required,Validators.pattern(/^[a-zA-Z ]*$/)]],
      email: ['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      fechaNacimiento: ['',[Validators.required, this.fechaNacimientoValidator,this.edadValidator]],
      fechaIngreso:['',[Validators.required, this.fechaIngresoValidator]]
    });
    this.id = this.route.snapshot.paramMap.get('id')?? '';
    this.obtenerEmpleado();
   }

  ngOnInit(): void {

  }

   // Validador personalizado para la fecha de nacimiento
   fechaNacimientoValidator(control: AbstractControl): { [key: string]: any } | null {
    const fechaNacimiento = control.value;
    const hoy = new Date();
    const fechaNacimientoParts = fechaNacimiento.split('-');
    const fechaNacimientoDate  = new Date(parseInt(fechaNacimientoParts[0]), parseInt(fechaNacimientoParts[1])-1, parseInt(fechaNacimientoParts[2]));
    if (fechaNacimientoDate > hoy) {
      return { 'fechaNacimientoPosterior': { message: 'La fecha de nacimiento no puede ser posterior al día de la fecha.' } };
    }
    return null;
  }

  // Validador personalizado para la edad del empleado
edadValidator(control: AbstractControl): { [key: string]: any } | null {
  const fechaNacimiento = control.value;
  const hoy = new Date();
  const fechaNacimientoParts = fechaNacimiento.split('-');
  const fechaNacimientoDate  = new Date(parseInt(fechaNacimientoParts[0]), parseInt(fechaNacimientoParts[1])-1, parseInt(fechaNacimientoParts[2]));

  let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();

  // Verificar si el mes y día de nacimiento ya pasaron este año
  const mesNacimiento = fechaNacimientoDate.getMonth();
  const diaNacimiento = fechaNacimientoDate.getDate();
  const mesHoy = hoy.getMonth();
  const diaHoy = hoy.getDate();
  if (mesNacimiento > mesHoy || (mesNacimiento === mesHoy && diaNacimiento > diaHoy)) {
    edad--;
  }
  if (edad < 18) {
    return { 'edadInvalida': { message: 'La edad del empleado no puede ser menor a 18 años.' } };
  }
  return null;
  }

  // Validador personalizado para la fecha de ingreso
  fechaIngresoValidator(control: AbstractControl): { [key: string]: any } | null {
    const fechaIngreso = control.value;
    const hoy = new Date();
    const fechaIngresoParts = fechaIngreso.split('-');
const fechaIngresoDate = new Date(parseInt(fechaIngresoParts[0]), parseInt(fechaIngresoParts[1])-1, parseInt(fechaIngresoParts[2]));
    if (fechaIngresoDate > hoy) {
      return { 'fechaIngresoPosterior': { message: 'La fecha de ingreso no puede ser posterior al día de la fecha.' }};
    }
    return null;
  }

  public actualizarEmpleado(){
    if (this.formularioEmpleado.valid) {
      const empleado = this.formularioEmpleado.value;
      this.empleadoService.updateEmpleado(parseInt(this.id),empleado).subscribe({
        next: res => {
          this.navegarListaEmpleado()
          this.snackBar.open('El empleado fue actualizado con éxito.', 'Cerrar', {
            duration: 3000, 
          });
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

  obtenerEmpleado(){
    this.empleadoService.getEmpleadosById(parseInt(this.id)).subscribe({
      next: res => {
        const empleadoTemp = res;
        this.empleado=empleadoTemp;
        this.formularioEmpleado.setValue({
          nroDocumento: this.empleado.nroDocumento,
          nombre: this.empleado.nombre,
          apellido: this.empleado.apellido,
          email: this.empleado.email,
          fechaNacimiento: this.empleado.fechaNacimiento,
          fechaIngreso: this.empleado.fechaIngreso,
        });

      },
      error: error => {
        const messages = error.error && error.error.messages ? error.error.messages : ['Ha ocurrido un error.'];
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
          data: { message: messages, navigateTo: '/'}
        });
      }
    });
  }

  navegarListaEmpleado(){
    this.router.navigate(['/']);
  }

}
