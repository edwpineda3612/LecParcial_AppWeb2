import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagenes1: string[] = Array.from({ length: 21 }, (_, i) =>
    `assets/imagenes/Nosotros${i === 0 ? '' : '-' + i}.jpg`

  //Queria subir desde mi Google Drive imagenes tambien.EdwinPC
      //https://drive.google.com/drive/folders/11JYFqIFUwF3_O-gehJ-vMo0NKQH6ruHn?usp=drive_link   

  );
}
