import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MenuItem, MessageService } from 'primeng/api';

import { TreeDataService } from '~app/services/tree-data.service'



@Component({
  selector: 'app-panel-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './panel-view.component.html',
  styleUrl: './panel-view.component.scss',
  providers: [MessageService,TreeDataService],
})
export class PanelViewComponent {


  toolbar_items?: MenuItem[];

  constructor(){
     this.toolbar_items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
  }

}
