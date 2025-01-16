import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-button-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './button-view.component.html',
  styleUrl: './button-view.component.scss',
  providers: [MessageService]
})
export class ButtonViewComponent {

  splitButtonItems: MenuItem[];

  speedDialItems: MenuItem[];

    constructor(private messageService: MessageService) {
        this.splitButtonItems = [
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

        
        this.speedDialItems = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target:'_blank',
                url: 'http://angular.io'
            }
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
