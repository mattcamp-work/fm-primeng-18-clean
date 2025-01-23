import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapConfirmDialogComponent } from '~app/component-wrappers/wrap-confirm-dialog/wrap-confirm-dialog.component';
import { WrapConfirmPopupComponent } from '~app/component-wrappers/wrap-confirm-popup/wrap-confirm-popup.component';
import { WrapDialogComponent } from '~app/component-wrappers/wrap-dialog/wrap-dialog.component';
import { WrapDrawerComponent } from '~app/component-wrappers/wrap-drawer/wrap-drawer.component';
import { WrapDynamicDialogComponent } from '~app/component-wrappers/wrap-dynamic-dialog/wrap-dynamic-dialog.component';
import { WrapPopoverComponent } from '~app/component-wrappers/wrap-popover/wrap-popover.component';
import { WrapTooltipComponent } from '~app/component-wrappers/wrap-tooltip/wrap-tooltip.component';

@NgModule({
  declarations: [

  ],
  imports: [
    // CommonModule,
    // NgModule,
    WrapConfirmDialogComponent,
    WrapConfirmPopupComponent,
    WrapDialogComponent,
    WrapDrawerComponent,
    WrapDynamicDialogComponent,
    WrapPopoverComponent,
    WrapTooltipComponent,
   
  ],
  exports: [
    // NgModule,
    // CommonModule,
    WrapConfirmDialogComponent,
    WrapConfirmPopupComponent,
    WrapDialogComponent,
    WrapDrawerComponent,
    WrapDynamicDialogComponent,
    WrapPopoverComponent,
    WrapTooltipComponent,
   
  ]
})
export class ComponentWrappersModule_fm { }


