import { Component } from '@angular/core';
import { FormularioProductosComponent } from '../../components/formulario-productos/formulario-productos.component';
import { TablaProductosComponent } from "../../components/tabla-productos/tabla-productos.component";
import { GridGapProductosComponent } from "../../components/grid-gap-productos/grid-gap-productos.component";

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormularioProductosComponent, TablaProductosComponent, GridGapProductosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit() 
  {   
   // this.authService.redirectToProtectedUrl();
    const user = this.authService.getUser();

    
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
