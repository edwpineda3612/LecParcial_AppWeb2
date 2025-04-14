import { Injectable } from '@angular/core';
import{Auth, onAuthStateChanged, signInWithEmailAndPassword, User}  from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User|null = null;

  constructor(private auth:Auth) { 
    onAuthStateChanged(this.auth, (user) => { this.currentUser = user; });
  }

     login(email: string, password: string) {
      return signInWithEmailAndPassword(this.auth, email, password)
      }


      logout() {
        return this.auth.signOut();
      }

      getUser() {   
        return this.currentUser;  }

        
      redirectToProtectedUrl():boolean{
        
        console.log(this.currentUser?.email);
        return this.currentUser !== null;
      }


      isTeacher(email: string) {    
        return  email && email.endsWith('@bestenergy.com.ec');    
       } 
        
      isStudent(email: string) {   
        return email && email.endsWith('@user-bestenergy.com.ec');    
      }
}
