import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompRowComponent } from './comp-row/comp-row.component';
import { HeaderComponent } from './header/header.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { DisplayRowComponent } from './display-row/display-row.component';



@NgModule({
  declarations: [
   
    HeaderComponent,
    
    DisplayRowComponent
  ],
  imports: [
    ThemeToggleComponent,
    CompRowComponent,
    CommonModule
  ],
  exports: [
    CompRowComponent,
    HeaderComponent,
    ThemeToggleComponent
  ]
})
export class SiteComponentsModule { }
