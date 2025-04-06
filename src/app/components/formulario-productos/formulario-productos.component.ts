import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent {

  constructor(private ProductosService: ProductosService){}

  nombre:any;
  precio:any;
  imagen_url:any;

  guardar(formulario:any){
    this.ProductosService.postProductos(formulario.value).subscribe(()=>{
      window.location.reload()
    })
  }

}
