import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PrimengImportsModule } from '~/app/primeng-imports/primeng-imports-fixed.module';
import { SiteComponentsModule } from '~/app/site-components/site-components.module';
import * as fmColorLibrary from '~/fm-theme/fm-color-tokens'

import { CodeCopyComponent } from '~/app/site-components/code-copy/code-copy.component';


//console.log("color library", fmColorLibrary);

import _ from 'lodash';

@Component({
  selector: 'app-tw-token-view',
  standalone: true,
  imports: [ SiteComponentsModule,PrimengImportsModule],
  templateUrl: './tw-token-view.component.html',
  styleUrl: './tw-token-view.component.scss'
})
export class TwTokenViewComponent implements OnInit {

  _fmBrandColors:any = this.convertColorList(fmColorLibrary.fmBrandColors.fm);
  _adkColors:any = this.convertColorList(fmColorLibrary.fmBrandColors.adk);
  _uiColors:any = this.convertColorList(fmColorLibrary.fmUiColors);
  _alphaColors:any = this.convertColorList(fmColorLibrary.fmUiAlpha);

  _rampList:any = this.makeColorRampList();

  _red:any = this.convertColorList(fmColorLibrary.fmUiColors.red,'red');

  _alphaWhite:any = this.convertColorList(fmColorLibrary.fmUiAlpha.white,'alpha-white');

  ngOnInit() {
      // console.log('======== red ========',fmColorLibrary.fmUiColors.red);
      // console.log('======= ramp list ===',this._rampList);
  }

  convertColorList(_list:string[],_prefix:string='xx'):string[] {

    const _colorList:string[] = [];

    _.each(_list,function(_value,_key){
      let _color:any = {};
      _color.name = _key;
      _color.prefix = _prefix;
      _color.value = _value;
      _colorList.push(_color);
    });

    //console.log("Here is my color list:",_colorList);

    return _colorList;
  }

  makeColorRampList() {
    const _rampList:any = {}

    _.each(fmColorLibrary.fmUiColors,(_value,_key)=>{
      _rampList[_key] = this.convertColorList(_value,_key);
    })

    return _rampList;
  }

}
