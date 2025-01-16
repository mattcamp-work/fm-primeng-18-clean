import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfmButtonBlockComponent } from './pfm-button-block/pfm-button-block.component';
import { ButtonWrapComponent } from './button-wrap/button-wrap.component';
import { InputWrapComponent } from './input-wrap/input-wrap.component';
import { ModalWrapComponent } from './modal-wrap/modal-wrap.component';
import { AlertWrapComponent } from './alert-wrap/alert-wrap.component';
import { TableWrapComponent } from './table-wrap/table-wrap.component';
import { TokenWrapComponent } from './token-wrap/token-wrap.component';
import { InputCalendarWrapComponent } from './input-calendar-wrap/input-calendar-wrap.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputRadioButtonComponent } from './input-radio-button/input-radio-button.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputDialogComponent } from './input-dialog/input-dialog.component';



@NgModule({
  declarations: [
    // PfmButtonBlockComponent,
    // ButtonWrapComponent,
    // InputWrapComponent,
    // ModalWrapComponent,
    // AlertWrapComponent,
    // TableWrapComponent,
    // TokenWrapComponent,
    // InputCalendarWrapComponent,
    // InputNumberComponent,
    // InputTextComponent,
    // InputSelectComponent,
    // InputRadioButtonComponent,
    // InputSwitchComponent,
    // InputDialogComponent
  ],
  imports: [
    CommonModule,
    PfmButtonBlockComponent,
    ButtonWrapComponent,
    InputWrapComponent,
    ModalWrapComponent,
    
    AlertWrapComponent,
    TableWrapComponent,
    TokenWrapComponent,
    InputCalendarWrapComponent,
    InputNumberComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioButtonComponent,
    InputSwitchComponent,
    InputDialogComponent
  ],
  exports: [
    PfmButtonBlockComponent,
    ButtonWrapComponent,
    InputWrapComponent,
    ModalWrapComponent,
    AlertWrapComponent,
    TableWrapComponent,
    TokenWrapComponent,
    InputCalendarWrapComponent,
    InputNumberComponent,
    InputTextComponent,
    InputSelectComponent,
    InputRadioButtonComponent,
    InputSwitchComponent,
    InputDialogComponent
  ]
})
export class ComponentWrappersModule_fm { }
