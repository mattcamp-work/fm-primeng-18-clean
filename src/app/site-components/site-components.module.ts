import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompRowComponent } from './comp-row/comp-row.component';
import { HeaderComponent } from './header/header.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { DisplayRowComponent } from './display-row/display-row.component';

import { TwColorRampComponent  } from './tw-color-ramp/tw-color-ramp.component';
import { TwColorTokenComponent } from './tw-color-token/tw-color-token.component';

import { ChatDemoComponent } from './chat-demo/chat-demo.component';



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
    ChatDemoComponent
  ],
  exports: [
    CompRowComponent,
    HeaderComponent,
    ThemeToggleComponent,
    TwColorTokenComponent,
    TwColorRampComponent,
    ChatDemoComponent
  ]
})
export class SiteComponentsModule { }
