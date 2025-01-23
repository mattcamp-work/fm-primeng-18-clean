import { Component } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

import { ComponentWrappersModule_fm } from '~app/component-wrappers/component-wrappers.module'; 


@Component({
  selector: 'app-overlay-view',
  standalone: true,
  imports: [PrimengImportsModule, ComponentWrappersModule_fm ],
  templateUrl: './overlay-view.component.html',
  styleUrl: './overlay-view.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class OverlayViewComponent {

 

}
