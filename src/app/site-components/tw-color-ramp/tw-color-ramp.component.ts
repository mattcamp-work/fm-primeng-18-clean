import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

import { CodeCopyComponent } from '../code-copy/code-copy.component';

import * as fmColorLibrary from '~/fm-theme/fm-color-tokens'

import Color from 'colorjs.io'

const adkColors = fmColorLibrary.fmBrandColors.adk;

const fmBrandColors = fmColorLibrary.fmBrandColors.fm;

const uiColors = fmColorLibrary.fmUiColors;

console.log("colorjs",Color);


console.log("list of colors",adkColors,fmBrandColors,uiColors);

console.log('My Colors',fmColorLibrary);

@Component({
  selector: 'app-tw-color-ramp',
  standalone: true,
  imports: [CommonModule, PrimengImportsModule, CodeCopyComponent],
  templateUrl: './tw-color-ramp.component.html',
  styleUrl: './tw-color-ramp.component.scss'
})
export class TwColorRampComponent {

  _fmBrandColors = fmColorLibrary.fmBrandColors.fm;
  _adkColors = fmColorLibrary.fmBrandColors.adk;


  convertToHex = function(_color:string){
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "hex" });
  }

   convertToRGB = function(_color:string){
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "rgb" });
  }



}
