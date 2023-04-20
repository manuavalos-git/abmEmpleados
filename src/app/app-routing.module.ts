import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './abm-empleados/components/agregar-empleado/agregar-empleado.component';
import { ListarEmpleadosComponent } from './abm-empleados/components/listar-empleados/listar-empleados.component';
import { ActualizarEmpleadoComponent } from './abm-empleados/components/actualizar-empleado/actualizar-empleado.component';
const routes: Routes = [
  {path:'',
  component: ListarEmpleadosComponent
  },
  { path: 'agregar-empleado',
   component: AgregarEmpleadoComponent
  },
  { path: 'actualizar-empleado/:id',
   component: ActualizarEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
