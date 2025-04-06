import { Routes } from '@angular/router';
import { Pagina404Component } from './pages/pagina-404/pagina-404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';


export const routes: Routes = [
    
    {path: 'inicio', component: InicioComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'organigrama', component: OrganigramaComponent},
    {path: 'contactanos', component: ContactanosComponent},
    
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: '**', component: Pagina404Component}
];
