import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertViewComponent } from './alert-view/alert-view.component';
import { ButtonViewComponent } from './button-view/button-view.component';
import { DataViewComponent } from './data-view/data-view.component';
import { FileViewComponent } from './file-view/file-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { InputViewComponent } from './input-view/input-view.component';
import { MediaViewComponent } from './media-view/media-view.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { OverlayViewComponent } from './overlay-view/overlay-view.component';
import { PanelViewComponent } from './panel-view/panel-view.component';
import { TableViewComponent } from './table-view/table-view.component';




@NgModule({
  declarations: [],
  imports: [
    AlertViewComponent,
    ButtonViewComponent,
    DataViewComponent,
    FileViewComponent,
    FormViewComponent,
    InputViewComponent,
    MediaViewComponent,
    MenuViewComponent,
    OverlayViewComponent,
    PanelViewComponent,
    TableViewComponent,
   // PrimengImportsModule,
  ],
  exports: [
    AlertViewComponent,
    ButtonViewComponent,
    DataViewComponent,
    FileViewComponent,
    FormViewComponent,
    InputViewComponent,
    MediaViewComponent,
    MenuViewComponent,
    OverlayViewComponent,
    PanelViewComponent,
    TableViewComponent,
    //PrimengImportsModule,
  ]
})
export class CompViewsModule { }

