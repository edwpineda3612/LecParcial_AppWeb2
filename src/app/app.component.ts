import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarBESComponent } from "./components/nav-bar-bes/nav-bar-bes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarBESComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BestEnergy_WEB';
}
