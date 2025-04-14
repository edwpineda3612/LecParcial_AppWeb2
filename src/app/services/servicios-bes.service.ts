import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiciosBesService {

  constructor(private http:HttpClient) { }

  private API_BES='https://bestenergyserv-default-rtdb.firebaseio.com/'
  private API_PRODUCTOS='https://bestenergy-8feb0-default-rtdb.firebaseio.com/'

  //private API_BES_SERVICIOS='https://bestenergy-8feb0-default-rtdb.firebaseio.com/servicios.json'

  getServiciosBES():Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/servicios.json`)
  }

  postServiciosBES(servicio_bes:any):Observable<any>{
    return this.http.post(`${this.API_PRODUCTOS}/servicios.json`,servicio_bes);
  }
   
  //Buscar Usuario por su ID
  getServiciosBESById(id:string):Observable<any>{
  return this.http.get(`${this.API_PRODUCTOS}/servicios/${id}.json`)
  }

  putServiciosBES(id:string, servicio_bes:any):Observable<any>{
    return this.http.put(`${this.API_PRODUCTOS}/servicios/${id}.json`,servicio_bes);
       
  }

  deleteServiciosBES(id:string):Observable<any>{
  return this.http.delete(`${this.API_PRODUCTOS}/servicios/${id}.json`)
}


}
