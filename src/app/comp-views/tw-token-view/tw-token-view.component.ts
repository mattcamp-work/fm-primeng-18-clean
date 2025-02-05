import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PrimengImportsModule } from '~/app/primeng-imports/primeng-imports-fixed.module';

import { SiteComponentsModule } from '~/app/site-components/site-components.module';

import * as fmColorLibrary from '~/fm-theme/fm-color-tokens'

import _ from 'lodash';

@Component({
  selector: 'app-tw-token-view',
  standalone: true,
  imports: [ SiteComponentsModule,PrimengImportsModule],
  templateUrl: './tw-token-view.component.html',
  styleUrl: './tw-token-view.component.scss'
})
export class TwTokenViewComponent {

  _fmBrandColors:any = this.convertColorList(fmColorLibrary.fmBrandColors.fm);


  makeName(_name:any,_prefix:string) {

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

    console.log("Here is my color list:",_colorList);

    return _colorList;
  }

}
