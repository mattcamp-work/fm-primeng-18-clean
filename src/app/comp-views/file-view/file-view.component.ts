import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}



@Component({
  selector: 'app-file-view',
  standalone: true,
  imports: [PrimengImportsModule,FileUpload, ToastModule, ButtonModule],
  templateUrl: './file-view.component.html',
  styleUrl: './file-view.component.scss',
   providers: [MessageService]
})
export class FileViewComponent {

    // constructor(private messageService: MessageService) {}

    // onUpload(event: UploadEvent) {
    //     this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    // }

}
