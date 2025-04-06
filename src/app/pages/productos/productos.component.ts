import { Component } from '@angular/core';
import { FormularioProductosComponent } from '../../components/formulario-productos/formulario-productos.component';
import { TablaProductosComponent } from "../../components/tabla-productos/tabla-productos.component";

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormularioProductosComponent, TablaProductosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  


}
