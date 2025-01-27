import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';



// Install PrimeNg 18 Theme

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

//import the FM Preset
import { FmPreset } from '~/fm-theme/fm-preset';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({ 
      theme: { 
        preset: FmPreset,
        options: {
          //prefix: 'pfm',
          darkModeSelector: '.fm-dark-mode',
          cssLayer: {
              name: 'fm-theme-2',
             // order: 'matt, tailwind-base, primeng, fm-theme, tailwind-utilities'
              //last layer is the dominant 
          }
        } 

      } 
    })
  ],

};
