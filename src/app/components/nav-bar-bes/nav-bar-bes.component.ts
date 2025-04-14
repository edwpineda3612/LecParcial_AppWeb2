import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar-bes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-bes.component.html',
  styleUrl: './nav-bar-bes.component.css'
})


export class NavBarBESComponent {

    constructor(private authService: AuthService, private router:Router) { }

    private user = this.authService.getUser();
    
    
    
    logout(): void {
      this.authService.logout(); 
      window.location.reload()
      console.log('Usuario cerro[o la sesión.');
      console.log(this.user?.email);
    }

}
