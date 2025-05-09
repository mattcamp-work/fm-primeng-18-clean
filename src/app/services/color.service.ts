import { Injectable } from '@angular/core';
import Color from 'colorjs.io';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor() {}

  // Get contrasting text color based on background color
  getContrastingTextColor(inputColor: string = "#ff0000"): string {
    const color = new Color(inputColor);
    const contrastWithBlack = color.contrast("#000", "WCAG21");
    const contrastWithWhite = color.contrast("#fff", "WCAG21");
    return contrastWithBlack > contrastWithWhite ? "#000" : "#fff";
  }

  // Convert color to hex format
  convertToHex(color: string): string {
    const colorObj = new Color(color);
    return colorObj.to("srgb").toString({ format: "hex" });
  }

  // Convert color to RGB format with commas
  convertToRGB(color: string): string {
    const colorObj = new Color(color);
    const [r, g, b] = colorObj.to("srgb").coords.map(v => Math.round(v * 255));
    const alpha = colorObj.alpha ?? 1; // if alpha

    if (alpha < 1) {
      return `rgba(${r},${g},${b},${alpha})`;
    }
    return `rgb(${r},${g},${b})`;
  }

  // Convert color to HSL format with commas
  // convertToHSL(color: string): string {
  //   const colorObj = new Color(color);
  //   const coords = colorObj.coords;
  //   return `hsl(${Math.round(coords[0])}, ${coords[2]}%, ${coords[1]}%)`;
  // }

  convertToHSL(input: string): string {
    const colorObj = new Color(input).to("hsl"); // Convert to HSL color space
    const [h, s, l] = colorObj.coords;

    const hueVal = h.toFixed(2);
    const satVal = (s * 100).toFixed(2);
    const lightVal = (l * 100).toFixed(2);
    const alpha = colorObj.alpha ?? 1; // if alpha

    if (alpha < 1) {
      return `hsl(${hueVal},${satVal}%,${lightVal}%,${alpha.toFixed(2)})`;
    }

    return `hsl(${hueVal},${satVal}%,${lightVal}%)`;

  }



}
