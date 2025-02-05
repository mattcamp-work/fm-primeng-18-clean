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


import { fmColorTokens } from './src/fm-theme/fm-color-tokens.ts'; // pull in color tokens from theme.


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
      colors:{
        ...twColorRemoveList,
        ...fmColorTokens,
        success:fmColorTokens.lime,
        danger:fmColorTokens.red,
        warning:fmColorTokens.orange,
        info:fmColorTokens.blue,
        help:fmColorTokens.teal,
        dark: {

        },
      },
    },
  },
  plugins: [
    require("tailwindcss-primeui"), //no logic here, just injects a few tokens (Primary, surface) and css utils for animations and timing.
    //preflight:true,
  ],
}

