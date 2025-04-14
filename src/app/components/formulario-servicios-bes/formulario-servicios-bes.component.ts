import { Component } from '@angular/core';
import { ServiciosBesService } from '../../services/servicios-bes.service';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-servicios-bes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-servicios-bes.component.html',
  styleUrl: './formulario-servicios-bes.component.css'
})
export class FormularioServiciosBesComponent {

constructor(private ServiciosBesService: ServiciosBesService, private authService: AuthService, private router: Router){}

nombre_serv:any;
precio_serv:any;
descripcion_serv:any;
imagen_url_serv:any;

servicios_bes:any[] = [];
//private currentUser: User|null = null;

public user = this.authService.getUser();


guardarServicio_bes(formulario_ser_bes:any){
  
  this.ServiciosBesService.postServiciosBES(formulario_ser_bes.value).subscribe(()=>{
    window.location.reload()
  })
}

}
