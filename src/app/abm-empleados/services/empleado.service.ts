import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private endpoint : string ='empleado';

  constructor(private http: HttpClient) { }

  public getEmpleados():Observable<Array<Empleado>>{
    let url=environment.api+this.endpoint;
    return this.http.get<Array<Empleado>>(url);
  }
  public getEmpleadosById(idEmpleado : Number):Observable<Empleado>{
    let url=environment.api+this.endpoint+`/${idEmpleado}`;
    return this.http.get<Empleado>(url);
  }

  public addEmpleado(empleado : Empleado):Observable<Empleado>{
    let url=environment.api+this.endpoint;
    return this.http.post<Empleado>(url,empleado);
  }

  public removeEmpleado(idEmpleado : Number):Observable<void>{
    let url=environment.api+this.endpoint+`/${idEmpleado}`;
    return this.http.delete<void>(url);
  }

  public updateEmpleado(idEmpleado : Number,empleado : Empleado):Observable<Empleado>{
    let url=environment.api+this.endpoint+`/${idEmpleado}`;
    return this.http.put<Empleado>(url,empleado);
  }
}
