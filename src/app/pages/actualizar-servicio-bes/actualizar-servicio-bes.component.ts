import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosBesService } from '../../services/servicios-bes.service';

@Component({
  selector: 'app-actualizar-servicio-bes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-servicio-bes.component.html',
  styleUrl: './actualizar-servicio-bes.component.css'
})
export class ActualizarServicioBesComponent {

  constructor(private serviciosbesservice:ServiciosBesService, private router: Router,
    private ruta:ActivatedRoute){}

      id:string ='';
      servicio:any={nombre_serv:'', precio_serv:'', imagen_url_serv:'', descripcion_serv:''};

      ngOnInit():void{
          this.ruta.params.subscribe(params =>{
          this.id = params['id'];
          this.serviciosbesservice.getServiciosBESById(this.id).subscribe(servicio=>{
            this.servicio =servicio;
        });
      });
      }

      editar(formulario:any){
        const servicioActualizado={...formulario.value, id:this.id}
          this.serviciosbesservice.putServiciosBES(this.id, servicioActualizado).subscribe(()=>{
          this.router.navigate(['/servicios']);
      })


      }


}
