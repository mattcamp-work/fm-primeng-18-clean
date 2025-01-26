import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-misc-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './misc-view.component.html',
  styleUrl: './misc-view.component.scss',
  providers: [MessageService]
})
export class MiscViewComponent {


  meterGroup_value = [
        { label: 'Apps', color: 'var(--p-red-300)', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: 'var(--p-yellow-300)', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: 'var(--p-blue-300)', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: 'var(--p-lime-300)', value: 10, icon: 'pi pi-cog' }
    ];

}
