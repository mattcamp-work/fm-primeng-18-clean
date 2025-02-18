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
  @Input() is_surface: boolean = false;

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

  // convertToRGB = function(_color: string) {
  //   const colorObj = new Color(_color);

  //   if (colorObj.alpha !== undefined) {
  //     return colorObj.to("srgb").toString({ format: "rgba" });
  //   }

  //   return colorObj.to("srgb").toString({ format: "rgb" });
  // }

   convertToRGB = (_color: string): string => {
    const colorObj = new Color(_color);
    const [r, g, b] = colorObj.to("srgb").coords.map(v => Math.round(v * 255));
    return `rgb(${r}, ${g}, ${b})`;
  };



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


  getClassName(_prefix: string = "-", _name: any = "test") {
    // if (this.is_surface) {
    //   return 'surface-' + _name;
    // }
    return this.adjustPrefix(_prefix) + _name;
  }

  getClassPrefix(_name: any) {

  
    if (/dark/igm.test(_name)) {
      return "dark:"
    }
    return '';
  }

  // getCssVar(_name:any) {
  //   return `var(--p-${this.getClassName('surface',_name)}`
  // }


getCSSVarFromDOM(_varName: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(_varName).trim();
}

  convertColorList(_list: string[], _prefix: string = ''): string[] {

    const _colorList: string[] = [];

    var _this = this;

    _.each(_list, (_colorCoord, _level) => {
      let _color: any = {};
      _color.level = _level;
      _color.prefix = _prefix;
      _color.classPrefix = this.getClassPrefix(this.name);
      _color.value = _colorCoord;
      _color.className = this.getClassName(_prefix, _level);

      // if (this.is_surface) {        
      //   let _cssVar = `--p-surface-${_level.toString()}`;
      //   _color.value = this.getCSSVarFromDOM(_cssVar);
      // }



      _colorList.push(_color);


    });

    //console.log("Here is my color list:",_colorList);

    return _colorList;
  }





}
