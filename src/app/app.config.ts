import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { MyPreset } from './configs/themes-config';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes)
    , provideAnimationsAsync()
    , providePrimeNG({ 
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.my-app-dark',
        }
      }
    }),
  ]
};
