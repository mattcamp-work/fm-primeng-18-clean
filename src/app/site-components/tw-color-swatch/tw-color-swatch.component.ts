import { Component, Input, signal, OnInit } from '@angular/core';

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
export class TwColorSwatchComponent implements OnInit {

  @Input() name: string = 'Test Red';
  @Input() value: string = '#ff0000';
  @Input() prefix: string = '';
  
  classPrefix: string = '';



  convertToHex = function(_color: string) {
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "hex" });
  }


  convertToRGB = (_color: string): string => {
    const colorObj = new Color(_color);
    const [r, g, b] = colorObj.to("srgb").coords.map(v => Math.round(v * 255));
    return `rgb(${r}, ${g}, ${b})`;
  };

  removeSpaces(_input:string){
      return _input.replace(/ /gmi,'');
  }

  adjustPrefix(_input:string) {

       if(_input.length > 0) {
        return _input+'-';
      }

      return _input;
  }

  ngOnInit() {

     this.classPrefix = this.adjustPrefix(this.prefix);

  }


}
