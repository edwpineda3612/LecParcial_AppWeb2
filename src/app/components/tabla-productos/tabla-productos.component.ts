import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent {

  constructor(private ProductosService: ProductosService){}
  
  productos:any[] = [];

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
