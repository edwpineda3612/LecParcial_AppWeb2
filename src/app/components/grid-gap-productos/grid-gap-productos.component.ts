import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-gap-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grid-gap-productos.component.html',
  styleUrl: './grid-gap-productos.component.css'
})
export class GridGapProductosComponent {

  constructor(private ProductosService: ProductosService, private authService: AuthService, private router: Router){}
  
  productos:any[] = [];

  
public user = this.authService.getUser();

  ngOnInit():void{
    this.ProductosService.getProductos().subscribe((data: any) => {
        this.productos =Object.keys(data).map(key => ({id:key, ...data[key]}));
      });
      
  } 

  eliminar(id:string):void{
    this,this.ProductosService.deleteProducto(id).subscribe(()=>{
      console.log(id);
      this.productos = this.productos.filter(producto => producto.id !== id)
    }, error=> {
        console.log ('No es posible eliminar el usuario', error);
    });
  }

}
