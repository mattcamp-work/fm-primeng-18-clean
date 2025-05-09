import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompRowComponent } from './comp-row/comp-row.component';
import { HeaderComponent } from './header/header.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { DisplayRowComponent } from './display-row/display-row.component';

import { TwColorRampComponent  } from './tw-color-ramp/tw-color-ramp.component';
import { TwColorTokenComponent } from './tw-color-token/tw-color-token.component';
import { TwColorSwatchComponent } from './tw-color-swatch/tw-color-swatch.component'

import { ChatDemoComponent } from './chat-demo/chat-demo.component';

import { CodeCopyComponent } from './code-copy/code-copy.component';
import { HomeEquityCalculatorComponent } from './home-equity-calculator/home-equity-calculator.component';

@NgModule({
  declarations: [   
    HeaderComponent,    
    DisplayRowComponent,
  ],
  imports: [
    ThemeToggleComponent,
    CompRowComponent,
    CommonModule,
    TwColorTokenComponent,
    TwColorRampComponent,
    ChatDemoComponent,
    CodeCopyComponent,
    TwColorSwatchComponent,
    HomeEquityCalculatorComponent,
  ],
  exports: [
    CompRowComponent,
    HeaderComponent,
    ThemeToggleComponent,
    TwColorTokenComponent,
    TwColorRampComponent,
    ChatDemoComponent,
    CodeCopyComponent,
    TwColorSwatchComponent,
    HomeEquityCalculatorComponent,
  ]
})
export class SiteComponentsModule { }
