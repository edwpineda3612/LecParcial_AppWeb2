import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http:HttpClient ) { }

  private API_PRODUCTOS='https://bestenergy-8feb0-default-rtdb.firebaseio.com/'


  getProductos():Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/productos.json`)
  }

  postProductos(producto:any):Observable<any>{
    return this.http.post(`${this.API_PRODUCTOS}/productos.json`,producto);
  }
   
  //Buscar Usuario por su ID
  getProductoById(id:string):Observable<any>{
  return this.http.get(`${this.API_PRODUCTOS}/productos/${id}.json`)
  }

  putProducto(id:string, producto:any):Observable<any>{
    return this.http.put(`${this.API_PRODUCTOS}/productos/${id}.json`,producto);
    
  }

deleteProducto(id:string):Observable<any>{
  return this.http.delete(`${this.API_PRODUCTOS}/productos/${id}.json`)
}
 


}
