/** @type {import('tailwindcss').Config} */

import { fmColorTokens } from './src/fm-theme/fm-color-tokens.ts'; // pull in color tokens from theme.

module.exports = {
  darkMode:['class','.fm-dark-mode'],
  content: [
    "./src/app/**/*.{html,ts,css,scss}", // TW scans these folders in "content" for the CSS classes you're using and discards the ones you're not (treeshaking). Very important. 
    "./node_modules/primeng/**/*.{js,css}" // 
  ],
  theme: {
    extend: {
      colors:{
        ...fmColorTokens,
        success:fmColorTokens.lime,
        danger:fmColorTokens.red,
        warning:fmColorTokens.orange,
        info:fmColorTokens.blue,
        help:fmColorTokens.teal,
        surface:fmColorTokens['fmGray'],
      }
    },
  },
  plugins: [
    require("tailwindcss-primeui"), //no logic here, just injects a few tokens (Primary, surface) and css utils for animations and timing.
    //preflight:true,
  ],
}

