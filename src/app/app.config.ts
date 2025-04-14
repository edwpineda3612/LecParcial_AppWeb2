import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from './firebase.config';
import { provideAuth, getAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),  provideHttpClient(),
    provideHttpClient(), provideFirebaseApp(()=>initializeApp(firebaseConfig)), provideAuth(()=> getAuth())]
};
