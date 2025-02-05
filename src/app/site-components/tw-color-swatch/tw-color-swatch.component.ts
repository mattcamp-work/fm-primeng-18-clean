import { Component, Input, signal } from '@angular/core';

import { PrimengImportsModule } from '~/app/primeng-imports/primeng-imports-fixed.module';
import { CodeCopyComponent } from '~/app/site-components/code-copy/code-copy.component';

import Color from 'colorjs.io';

@Component({
  selector: 'app-tw-color-swatch',
  standalone: true,
  imports: [PrimengImportsModule,CodeCopyComponent],
  templateUrl: './tw-color-swatch.component.html',
  styleUrl: './tw-color-swatch.component.scss'
})
export class TwColorSwatchComponent {

  @Input() name: string = 'Test Red';
  @Input() value: string = '#ff0000';
  @Input() prefix: string = '';
  
  classPrefix: string = '';



   convertToHex = function(_color: string) {
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "hex" });
  }

  convertToRGB = function(_color: string) {
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "rgb" });
  }

  removeSpaces(_input:string){
      return _input.replace(/ /gmi,'');
  }

  constructor(){

    this.value = this.value.replace(/ /gmi,'X');

     if(this.prefix.length > 0) {
        this.classPrefix = this.classPrefix+'-';
      }
  }

}
