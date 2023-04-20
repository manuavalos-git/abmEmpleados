import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbmEmpleadosModule } from './abm-empleados/abm-empleados.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AbmEmpleadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
