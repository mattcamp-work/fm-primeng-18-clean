import { Component, Input, signal, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

import { CodeCopyComponent } from '../code-copy/code-copy.component';
import * as fmColorLibrary from '~/fm-theme/fm-color-tokens';

import Color from 'colorjs.io';
import _ from 'lodash';


console.log("colorjs", Color);

// console.log("loaded =====================");

// console.log(" RED =======>", fmColorLibrary.fmUiColors);

@Component({
  selector: 'app-tw-color-ramp',
  standalone: true,
  imports: [CommonModule, PrimengImportsModule, CodeCopyComponent],
  templateUrl: './tw-color-ramp.component.html',
  styleUrl: './tw-color-ramp.component.scss'
})
export class TwColorRampComponent {

  _testColor: any = this.convertColorList(fmColorLibrary.fmUiColors.red, 'red');

  //ramp?:any = [];


  @Input() name:string = 'Red';
  @Input() value:string = '#ff0000';
  @Input() prefix:string = '';

  @Input() ramp?:any = [];

  rampColorList?:any = [];


  classPrefix?:string = '';


  ngOnInit() {


    console.log('ramp ====>', this.ramp, 'name ====>',this.name, 'prefix ====>',this.prefix)



    this.rampColorList = this._testColor;

    if (this.ramp.length !== 0) {
     // this.name = this.ramp.name;
     // this.prefix = this.ramp.prefix;     

      let _tempPrefix = this.adjustPrefix(this.prefix)+this.name;
      this.rampColorList = this.convertColorList(this.ramp,_tempPrefix)

    }

   console.log("ramp2 =========>", this.ramp)

   this.classPrefix = this.adjustPrefix(this.prefix);


  }


  getTextColor2(_inputColor: string = "#ff0000") {
    const _thisColor = new Color(_inputColor);

    let _black = new Color("#000000");
    let _white = new Color("#FFFFFF");

    let contrastWithBlack = _thisColor.contrast(_black, "WCAG21");
    let contrastWithWhite = _thisColor.contrast(_white, "WCAG21");
    return contrastWithBlack > contrastWithWhite ? "text-fm-black" : "text-fm-white";
  }

  convertToHex = function(_color: string) {
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "hex" });
  }

  convertToRGB = function(_color: string) {
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "rgb" });
  }

  convertToRGBA = function(_color: string) {
    const colorObj = new Color(_color);
    return colorObj.to("srgb").toString({ format: "rgba" });
  }

  removeSpaces(_input: string) {
    return _input.replace(/ /gmi, '');
  }

  adjustPrefix(_input:string = '') {

    if(_input.length === 0) {
      return _input;
    }

    //convert camelCase names to kebab
    if (/^[a-z]+(?:[A-Z][a-z]*)*$/.test(_input)) {
      _input = _.kebabCase(_input);
    }

   _input = _input+'-'

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
