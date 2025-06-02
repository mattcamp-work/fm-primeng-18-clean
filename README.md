
<style>
   
   .warning {
      background-color: rgba(250,175,50,.15);
      /*color:Orange;*/
      padding:.75em 1em;
      //font-weight: bold;
      border-radius: 8px;
      display: inline-block;
      .msg {
         display: inline-block;
         /*vertical-align: top;*/
      }
      &:before {
         content: '⚠️';
         display: inline-block;
         margin-right:.75em;
         font-size: 1.5em;
         vertical-align: middle;
      }
   }

   .callout {
      background: rgba(0,0,0,.06);
      padding:24px;
      padding-bottom:.5em;
      border-radius:8px;
      margin-bottom: 1em;
   }

   .table-wrap {
      margin: 0 auto;
      display: inline-block;
      padding:2em;
      background-color: color-mix(in srgb, currentColor 2%, transparent);
      border-radius: 16px;
      text-align: center;
      border: 1px solid color-mix(in srgb, currentColor 6%, transparent);;
   }

</style>


# ADK PrimeNG 18 Installation Guide

   [!WARNING]
   this is cool

#### This guide helps you: 

- Install a brand aligned SCSS theme for **PrimeNg 18 Components**
- Install a brand aligned them for **TailwindCss Utilities**
<br /><br /> 



## Part 1: Installing PrimeNg-18 and the PrimeNg-18 Theme

1. **Verify that your angular version is 18 or newer**
   ```bash
      npx ng version
   ```

2. **Install the following node modules from nexus**:

   ```bash
   ng add primeng adk-prime-ui
   ```

3. **Import the Preset File into `app.config`**:

   Your app.config file should be in ./src/app/

   ```json
   /* app.config.ts */

      // standard boilerplate, your file may look different
      import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
      import { provideRouter } from '@angular/router';
      import { routes } from './app.routes';


         // Import PrimeNg 18 Theme
      import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
      import { providePrimeNG } from 'primeng/config';

      //import the FM Preset
      import { FmPreset } from '~node/fm-theme/fm-preset';


      //Set Up the appConfig, add the preset
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
                  ripple:true
                }
              } 

            } 
          })
        ],

      };

   ```
## Part 2: Installing Tailwind and the FM Tailwind Preset (theme)
  

   ### Why do I need to install ADK-PrimeNg AND TailwindCss? 

- PrimeNg18 only partially themes your app (components: buttons, dropdowns, inputs). You still a theme to cover everything else (page, text, links, divs, columns).
 <br /><br /> 

**The table below shows the gaps in theme coverage across different components.**

<div class="table-wrap">

 

   | Site Elements        | PrimeNG                           | Tailwind CSS                     | ADK 3.0 / Blueprint
   |----------------------|-----------------------------------|----------------------------------|--------------------------|
   | Buttons, Inputs, Tables, Dropdowns etc     | ✅ | ❌ | ⚠️ |
   | Columns, Margin, Padding  | ❌ | ✅  |✅  |
   | Typography        | ⚠️ | ✅  | ⚠️ |
   | Color Theming     |  ✅   | ✅  | ✅  |
   | Media Queries / Responsive Utilities   | ❌   | ✅ | ⚠️ |
   | State Styling     | ✅  | ✅ |⚠️|
   | Theming Extensibility | ⚠️ | ✅  | ⚠️ |
   | Accessibility Utilities | ⚠️ | ✅  | ⚠️ |

<div style="text-align: right;">
✅ <small>Strong support</small>&nbsp;&nbsp;  ⚠️ = <small>Partial Support</small> &nbsp;&nbsp; ❌ = <small>Oooof</small> 
</div>
</div>
  

<br /><br /> 

### Installation 
 <div class="warning">
   If your app already has ADK, skip these steps. ADK and Tailwind have style conflicts that are difficult to resolve.
   </div>
   <br /><br /> 
1. **Install the following node modules from nexus**:

   ```bash
   ng add tailwindcss tailwindcss-primeui
   ```

2. **Configure Tailwind CSS**:

   This will create a tailwind.config file in the root dir:
   ```bash
   npx tailwindcss init
   ```

4. **Add Tailwind Preset**:
   Add in the the tailwind 'preset' `tailwind.config.js`:
   (This will align tailwind utilities to the FM brand colors)
   ```js
   module.exports = {
     presets: [
       require('tailwindcss/prd-prime-ui-theme'),
     ],
     require('tailwindcss/prd-prime-ui-theme'),
   }
   ```
