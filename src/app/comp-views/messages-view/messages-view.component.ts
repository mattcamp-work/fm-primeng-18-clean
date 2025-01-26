import { Component } from '@angular/core';


import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-messages-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './messages-view.component.html',
  styleUrl: './messages-view.component.scss',
  providers:[MessageService]
})
export class MessagesViewComponent {

   constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    showContrast() {
        this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
    }

    showSecondary() {
        this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
    }

}
