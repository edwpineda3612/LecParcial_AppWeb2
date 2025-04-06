import { Component } from '@angular/core';
import { VideoComponent } from "../../components/video/video.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
