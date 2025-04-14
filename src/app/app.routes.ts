import { Routes } from '@angular/router';
import { Pagina404Component } from './pages/pagina-404/pagina-404.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { ActualizarProductoComponent } from './pages/actualizar-producto/actualizar-producto.component';
import { ActualizarServicioBesComponent } from './pages/actualizar-servicio-bes/actualizar-servicio-bes.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
    
    {path: 'inicio', component: InicioComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'servicios', component: ServiciosComponent, canActivate:[authGuard]},
    {path: 'servicios/:id', component:ActualizarServicioBesComponent},   
    {path: 'productos', component: ProductosComponent, canActivate:[authGuard]},
    {path: 'productos/:id', component:ActualizarProductoComponent},
    {path: 'organigrama', component: OrganigramaComponent},
    {path: 'contactanos', component: ContactanosComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo:'/inicio', pathMatch:'full'},
    {path: '**', component: Pagina404Component}
];
