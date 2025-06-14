import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fmColorLibrary from '~node/fm-theme/fm-color-tokens';
import _ from 'lodash';
import { ColorService } from '~app/services/color.service';

@Component({
  selector: 'app-token-export',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token-export.component.html',
  styleUrls: ['./token-export.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TokenExportComponent {
  private colorService = inject(ColorService);
  colorTokens: any[] = [];

  constructor() {
    this.processColorTokens();
  }

  private processColorTokens() {
    const colors = fmColorLibrary.fmUiColors;
    this.colorTokens = [];

    _.each(colors, (colorRamp, colorName) => {
      _.each(colorRamp, (value, level) => {
        this.colorTokens.push({
          name: colorName,
          level: level,
          value: value,
          hex: this.colorService.convertToHex(value),
          hsl: value,
          fullname:`${colorName}-${level}`,
          rgb: this.colorService.convertToRGB(value),
          textcolor: this.colorService.getContrastingTextColor(value),
        });
      });
    });
  }
} 