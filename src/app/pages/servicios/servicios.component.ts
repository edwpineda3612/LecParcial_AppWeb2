import { Component } from '@angular/core';
import { FormularioProductosComponent } from '../../components/formulario-productos/formulario-productos.component';
import { TablaProductosComponent } from "../../components/tabla-productos/tabla-productos.component";
import { GridGapProductosComponent } from "../../components/grid-gap-productos/grid-gap-productos.component";
import { FormularioServiciosBesComponent } from "../../components/formulario-servicios-bes/formulario-servicios-bes.component";
import { CarruselServiciosBesComponent } from "../../components/carrusel-servicios-bes/carrusel-servicios-bes.component";

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [   FormularioServiciosBesComponent, CarruselServiciosBesComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() 
  {   
   // this.authService.redirectToProtectedUrl();

    const user = this.authService.getUser();
    //(this.email && this.email.endsWith('@est.stanford.com.ec'))
    console.log(user?.email);
    
     switch (user?.email) {
      
      case 'epineda@bestenergy.com.ec':
        console.log('Usuario EPineda:', user.email);
        //this.router.navigate(['/nosotros']);
        break;
      case 'gochoa@user-bestenergy.com.ec':
        console.log('Usuario Gonzalo:', user.email);
        //this.router.navigate(['/contactos']);
        break;  
      case null:
        console.log('Usuario Null');
        //this.router.navigate(['/nosotros']);
        break;
      default:
        console.log('Usuario Default');
        //this.router.navigate(['/nosotros']);
        break;
    } 
 
    
   
  }
  

}
