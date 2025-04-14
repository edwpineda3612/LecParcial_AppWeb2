import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-actualizar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  constructor(private productosservice:ProductosService, private router: Router,
    private ruta:ActivatedRoute){}

      id:string ='';
      producto:any={nombre:'', precio:'', imagen_url:'', descripcion:''};

      ngOnInit():void{
          this.ruta.params.subscribe(params =>{
          this.id = params['id'];
          this.productosservice.getProductoById(this.id).subscribe(producto=>{
            this.producto =producto;
        });
      });
      }

      editar(formulario:any){
        const productoActualizado={...formulario.value, id:this.id}
          this.productosservice.putProducto(this.id, productoActualizado).subscribe(()=>{
          this.router.navigate(['/productos']);
      })


      }

}
