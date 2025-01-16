import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-button-test',
  standalone: true,
  imports: [ButtonModule, SplitButton, ToastModule],
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.scss',
  providers: [MessageService]
})
export class ButtonTestComponent {

   items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular Website', url: 'http://angular.io' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }

}
