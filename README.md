
<style>
   
   .warning {
      background-color: rgba(250,175,50,.2);
      color:firebrick;
      padding:12px 16px;
      font-weight: bold;
      border-radius: 8px;
   }

   .callout {
      background: rgba(0,0,0,.06);
      padding:24px;
      padding-bottom:.5em;
      border-radius:8px;
      margin-bottom: 1em;
   }

</style>


# ADK PrimeNG 18 Installation Guide


## 1. Installing PrimeNg

#### What this process does: 

- Installs a brand aligned SCSS theme for **PrimeNg 18 Components**
- Installs a brand aligned them for **TailwindCss Utilities**

#### Why do I need to install ADK-PrimeNg AND TailwindCss? 

- The ADK-PrimeNg Theme only targets primeng components, you will still need scss to structure the page and your site. TailwindCSS makes this wonderfully easy and fast. 


### Steps:
1. Verify that your angular version is 18 or newer
   ```bash
      npx ng version
   ```

2. **Install the following node modules from nexus**:

   ```bash
   ng add primeng adk-prime-ui-theme
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

3. **Configure Tailwind CSS**:

   Run the Tailwind CSS configuration command to set up Tailwind in your project:
   ```bash
   npx tailwindcss init
   ```

4. **Add Tailwind Preset**:
   Make sure to include the Tailwind preset in your `tailwind.config.js`:
   ```js
   module.exports = {
     presets: [
       require('tailwindcss/prd-prime-ui-theme'),
     ],
   }
   ```

## 2. Install with Existing PRDK Legacy System

If you are working with an existing PRDK legacy system, follow these steps:

### Steps:
1. **Install PrimeNG**:
   Run the following command to install PrimeNG:
   ```bash
   npm install primeng
   ```

2. **Install the Preset File**:
   Install the preset file to ensure the theme integration works with the legacy system:
   ```bash
   npm install prd-prime-ui-theme
   ```

3. **Skip Tailwind CSS**:
   Since Tailwind CSS is not required for legacy systems, **do not** run the Tailwind configuration steps.

---

Feel free to refer to this guide for quick setup in your project.
