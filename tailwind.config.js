/** @type {import('tailwindcss').Config} */

/*
==================================================================
  How this tailwind tree shaking works

        ┌───────────────────────────┐
        │  Source Files (HTML, JS)  │  <- Your project files
        └───────────────────────────┘
                 │
     (Tailwind scans for class names)
                 ▼
        ┌────────────────────┐
        │   Tailwind Engine  │  <- Parses and extracts classes
        └────────────────────┘
                 │
     (Matches classes with Tailwind's utility set)
                 ▼
        ┌────────────────────┐
        │  Purge Unused CSS  │  <- Removes unused styles (Tree Shaking)
        └────────────────────┘
                 │
     (Outputs only necessary styles)
                 ▼
        ┌────────────────────┐
        │  Final CSS Output  │  <- Minimized and optimized
        └────────────────────┘
==================================================================


*/


import { fmColorTokens } from './node_modules_dev/fm-theme/fm-color-tokens.ts'; // pull in color tokens from theme.
import { surfaceColors } from './node_modules_dev/fm-theme/fm-color-tokens.ts'; 
import { levels } from './node_modules_dev/fm-theme/fm-color-tokens.ts'; 

import _ from 'lodash';

// const convert = (color) => {
//     return `color-mix(in srgb, ${color} calc(100% * <alpha-value>), transparent)`;
// };




/* =======================*/
// Remove colors from tailwind defaults that are not part of FM colors

const twColorRemoveList = {
  emerald: undefined,
  amber:undefined,
  emerald:undefined,
  cyan:undefined,
  sky:undefined,
  violet:undefined,
  fuscia:undefined, 
  pink:undefined,

}

module.exports = {
  darkMode:['class','.fm-dark-mode'],
  content: [
    "./src/app/**/*.{html,ts,css,scss}", // TW scans these folders in "content" for the CSS classes you're using and discards the ones you're not (treeshaking). Very important. 
    "./node_modules/primeng/**/*.{js,css}" // 
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Roboto Slab", "serif"],
        sans: ["Source Sans 3", "sans-serif"],
      },
      colors:{
        ...twColorRemoveList,
        ...fmColorTokens,
        primary:fmColorTokens.navy,
        success:fmColorTokens.lime,
        danger:fmColorTokens.red,
        warning:fmColorTokens.orange,
        info:fmColorTokens.blue,
        help:fmColorTokens.teal,
        ground: {
          0: 'var(--p-ground-0)',
          25: 'var(--p-ground-25)',
          50: 'var(--p-ground-50)',
          75: 'var(--p-ground-75)',
          100: 'var(--p-ground-100)',
          150: 'var(--p-ground-150)',
          200: 'var(--p-ground-200)',
          250: 'var(--p-ground-250)',
          300: 'var(--p-ground-300)',
          400: 'var(--p-ground-400)',
          500: 'var(--p-ground-500)',
          600: 'var(--p-ground-600)',
          700: 'var(--p-ground-700)',
          750: 'var(--p-ground-750)',
          800: 'var(--p-ground-800)',
          850: 'var(--p-ground-850)',
          900: 'var(--p-ground-900)',
          925: 'var(--p-ground-925)',
          950: 'var(--p-ground-950)',
          975: 'var(--p-ground-975)',
        },
        // surface:surfaceColors.light,
        // dark: {
        //   surface:surfaceColors.dark
        // },
      },
    },
  },
  plugins: [
    require("tailwindcss-primeui"), //no logic here, just injects a few tokens (Primary, surface) and css utils for animations and timing.
    //preflight:true,
  ],
}



