import { Component } from '@angular/core';
import { ServiciosBesService } from '../../services/servicios-bes.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel-servicios-bes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrusel-servicios-bes.component.html',
  styleUrl: './carrusel-servicios-bes.component.css'
})
export class CarruselServiciosBesComponent {


  constructor(private ServiceosBesService: ServiciosBesService, private authService: AuthService, private router: Router){}


  servicios_bes:any[] = [];
  //private currentUser: User|null = null;

  public user = this.authService.getUser();

  ngOnInit():void{
    this.ServiceosBesService.getServiciosBES().subscribe((data: any) => {
        this.servicios_bes =Object.keys(data).map(key => ({id:key, ...data[key]}));
      });

      
      console.log(this.user?.email);
       

      
  } 

  eliminarservicio(id:string):void{
    this,this.ServiceosBesService.deleteServiciosBES(id).subscribe(()=>{
      console.log(id);
      this.servicios_bes = this.servicios_bes.filter(servicio => servicio.id !== id)
    }, error=> {
        console.log ('No es posible eliminar el usuario', error);
    });
  }

}
