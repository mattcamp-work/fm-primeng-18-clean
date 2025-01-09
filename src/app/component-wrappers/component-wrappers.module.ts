import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfmButtonBlockComponent } from './pfm-button-block/pfm-button-block.component';
import { ButtonWrapComponent } from './button-wrap/button-wrap.component';
import { InputWrapComponent } from './input-wrap/input-wrap.component';
import { ModalWrapComponent } from './modal-wrap/modal-wrap.component';
import { AlertWrapComponent } from './alert-wrap/alert-wrap.component';
import { TableWrapComponent } from './table-wrap/table-wrap.component';
import { TokenWrapComponent } from './token-wrap/token-wrap.component';



@NgModule({
  declarations: [
    PfmButtonBlockComponent,
    ButtonWrapComponent,
    InputWrapComponent,
    ModalWrapComponent,
    AlertWrapComponent,
    TableWrapComponent,
    TokenWrapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PfmButtonBlockComponent,
    ButtonWrapComponent,
    InputWrapComponent,
    ModalWrapComponent,
    AlertWrapComponent,
    TableWrapComponent,
    TokenWrapComponent
  ]
})
export class ComponentWrappersModule { }
