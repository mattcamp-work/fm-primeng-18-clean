import { Component, Input, signal, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

import { CodeCopyComponent } from '~/app/site-components/code-copy/code-copy.component';
import * as fmColorLibrary from '~/fm-theme/fm-color-tokens';

import Color from 'colorjs.io';
import _ from 'lodash';

@Component({
  selector: 'app-tw-color-ramp',
  standalone: true,
  imports: [CommonModule, PrimengImportsModule, CodeCopyComponent],
  templateUrl: './tw-color-ramp.component.html',
  styleUrl: './tw-color-ramp.component.scss'
})

export class TwColorRampComponent {



  @Input() name: string = 'Red';
  @Input() prefix: string = ''; // used for 'alpha' ramps
  @Input() ramp_values ? : any = []; // ramp color values sent in from tw-token-view.component

  rampColorList ? : any = []; // object to hold the cleaned up color list



  ngOnInit() {

    //set the default value if not supplied
     this.rampColorList = this.convertColorList(fmColorLibrary.fmUiColors.red, 'red');

     // it ramp_value has been supplied, set up the rampColorList
    if (this.ramp_values.length !== 0) {

      let _tempPrefix = this.adjustPrefix(this.prefix) + this.name;
      this.rampColorList = this.convertColorList(this.ramp_values, _tempPrefix)

    }

  }

  // compare bg color against black and white, return the option that is the higher contrast
  getContrastingTextColor(_BgColor: string = "#ff0000") {
    const _thisColor = new Color(_BgColor);

    let contrastWithBlack = _thisColor.contrast("#000", "WCAG21");
    let contrastWithWhite = _thisColor.contrast("#fff", "WCAG21");
    return contrastWithBlack > contrastWithWhite ? "text-fm-black" : "text-fm-white";
  }

  convertToHex = function(_color: string) {
    const colorObj = new Color(_color);
    //console.log("========= colorObj ========>",colorObj);
    return colorObj.to("srgb").toString({ format: "hex" });
  }

  convertToRGB = function(_color: string) {
    const colorObj = new Color(_color);
    
    if(colorObj.alpha !== undefined) {
       return colorObj.to("srgb").toString({ format: "rgba" });
    }

    return colorObj.to("srgb").toString({ format: "rgb" });
  }

 

  removeSpaces(_input: string) {
    return _input.replace(/ /gmi, '');
  }

  adjustPrefix(_input: string = '') {

    if (_input.length === 0) {
      return _input;
    }

    //convert camelCase names to kebab
    if (/^[a-z]+(?:[A-Z][a-z]*)*$/.test(_input)) {
      _input = _.kebabCase(_input);
    }

    _input = _input + '-'

    return _input;
  }

  convertColorList(_list: string[], _prefix: string = ''): string[] {

    const _colorList: string[] = [];

    var _this = this;

    _.each(_list, (_value, _key) => {
      let _color: any = {};
      _color.name = _key;
      _color.prefix = _prefix;
      _color.classPrefix = this.adjustPrefix(_prefix);
      _color.value = _value;
      _colorList.push(_color);
    });

    //console.log("Here is my color list:",_colorList);

    return _colorList;
  }





}
