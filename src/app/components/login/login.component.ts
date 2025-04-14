import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router:Router) { }

  login():void {
              
    
    if (this.email && this.email.endsWith('@user-bestenergy.com.ec')) {
      this.loginGOchoa();
    }
    else if (this.email && this.email.endsWith('@bestenergy.com.ec')) {  
      this.loginEPinedaADM();
    }
    else {
      this.router.navigate(['/inicio']); 
    }

    /*
    this.authService.login(this.email, this.password)
      .then(() => {setTimeout(() => {this.router.navigate(['/docentes']); }, 500);})
      .catch((error) => {console.log(error)}); 
    */
  }
  

  loginGOchoa():void {
              
    this.authService.login(this.email, this.password)
      .then(() => {setTimeout(() => {this.router.navigate(['/inicio']); }, 500);})
      .catch((error) => {console.log(error)}); 
  }

  loginEPinedaADM():void {
              
    this.authService.login(this.email, this.password)
      .then(() => {setTimeout(() => {this.router.navigate(['/inicio']); }, 500);})
      .catch((error) => {console.log(error)}); 

  }


}
