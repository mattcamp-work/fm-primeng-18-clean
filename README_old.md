# Primeng18Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# PrimeNG-18 Theme Installation Guide

## 1. Installation

### 1.1 Install the `fm-theme` Folder
Place the `fm-theme` folder at the `/src` directory of your project.

### 1.2 Adding a Preset to the App Config
Update your app configuration with a preset:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Install PrimeNg 18 Theme
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

//import the FM Preset
import { FmPreset } from '~/fm-theme/fm-preset';


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
        } 

      } 
    })
  ],

};

```

### 1.3 Install Tailwind and TailwindCSS-PrimeUI with npm
Run the following commands to install the necessary dependencies:

```bash
npm install tailwindcss tailwindcss-primeui --save-dev
```

#### 1.3.1 Initialize TailwindCSS
Run this command to generate the `tailwind.config.js` configuration file:

```bash
npx tailwindcss init
```

#### 1.3.2 Configure TailwindCSS
Add the following to your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */

import { fmColorTokens } from './src/fm-theme/fm-color-tokens.ts'; // pull in color tokens from theme.

module.exports = {
  darkMode:['class','.fm-dark-mode'], // associate the 'dark:' utility to the .fm-dark-mode class
  content: [
    "./src/app/**/*.{html,ts,css,scss}", // TW scans these folders in "content" for the CSS classes you're using and discards the ones you're not (treeshaking). Very important. 
    "./node_modules/primeng/**/*.{js,css}" // 
  ],
  theme: {
    extend: {
      colors:{
        ...fmColorTokens, // inject fm-color tokens into Tailwind
        success:fmColorTokens.lime,
        danger:fmColorTokens.red,
        warn:fmColorTokens.orange,
        info:fmColorTokens.blue,
        help:fmColorTokens.teal,
        error:fmColorTokens.red,
      }
    },
  },
  plugins: [
    require("tailwindcss-primeui"), //no logic here, this scrapes css tokens from PrimeNg (Primary, surface) and add css utils for animations and timing.
    //preflight:true,
  ],
}


```

#### 1.3.3 Pull tailwind layers into your app.scss
Add the following to your `styles.scss` or `styles.css` file:

```scss

/* Global Styles for your app */

// don't change the css layer order.
@layer tailwind-base,
primeng,
your-app,
fm-theme,
tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}


@layer your-app {
  /*

   your app stuff here

   */
}

@layer fm-theme {

   body, .fm-body-font {
    font-family: "Source Sans 3", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  /* For Headlines on branded Material */
  .fm-display-font {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }


}

```

#### 1.3.4 Add the Fonts
Add Source-Sans-3 and Roboto Slab to your index file

```html
<!doctype html>
<html lang="en" class="fm-dark-mode__">
<head>
  <meta charset="utf-8">
  <title>Primeng 18 Clean Install</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

   	<!-- =========================== -->
  	<!-- =========================== -->
  	<!-- Begin Google Fonts Include -->
  	<!-- =========================== -->
  	<!-- =========================== -->
  	
  		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">s
	
	<!-- =========================== -->
  	<!-- =========================== -->
	<!-- End Google Fonts Include -->
	<!-- =========================== -->
 	<!-- =========================== -->

</head>
<body > <app-root></app-root>
</body>
</html>
```

---

## 2. How to Use This in the Real World

### 2.1 Simplified Styling with Tailwind Utility Classes
Say goodbye to hex codes and custom stylesheets! Use Tailwind utility classes directly on your elements.

#### Examples

- **Color:**

```html
<div class="bg-primary text-white">This is a primary background</div>
```

- **Font Size:**

```html
<p class="text-lg">This text is large</p>
```

- **Padding:**

```html
<div class="p-4">This has padding</div>
```

- **Margin:**

```html
<div class="m-4">This has a margin</div>
```

- **Animations:**

```html
<div class="animate-bounce">This element bounces</div>
```

### 2.2 Responsive Layouts and Dark Mode Theming

#### Examples

- **Dark Mode:**

```html
<div class="dark:bg-gray-800 dark:text-white">This adapts to dark mode</div>
```

- **Responsive Utilities:**

```html
<div class="sm:bg-blue-200 md:bg-blue-400 lg:bg-blue-600">Responsive backgrounds</div>
```

### 2.3 Styling PrimeNG Components (no more ngDeep)
For some PrimeNG components, `class="..."` may not work directly. Instead, use the `styleClass` property:

```html
<p-button styleClass="bg-primary text-white">Click Me</p-button>
```

### 2.4 Grouping Tailwind Classes with `@apply`
Tailwind can feel unwieldy at times. Simplify it using the `@apply` directive in SCSS to group styles into reusable classes.

#### Example

```scss
/* styles.scss */
.btn-primary {
  @apply bg-primary text-white py-2 px-4 rounded;
}
```

Usage:

```html
<button class="btn-primary">Primary Button</button>
