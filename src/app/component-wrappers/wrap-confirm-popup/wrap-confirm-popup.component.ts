import { Component } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

@Component({
  selector: 'app-wrap-confirm-popup',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './wrap-confirm-popup.component.html',
  styleUrl: './wrap-confirm-popup.component.scss',
  providers:[ConfirmationService,MessageService]
})
export class WrapConfirmPopupComponent {

   constructor(
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,

    ) {}

  popup_confirm1(popup_event: Event) {
        this.confirmationService.confirm({
            target: popup_event.target as EventTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Save'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    popup_confirm2(popup_event: Event) {
        this.confirmationService.confirm({
            target: popup_event.target as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Delete',
                severity: 'danger'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

}
