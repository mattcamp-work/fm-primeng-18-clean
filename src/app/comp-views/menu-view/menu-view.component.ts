import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MenuItem, MessageService } from 'primeng/api';
import { TreeDataService } from '~app/services/tree-data.service'

@Component({
  selector: 'app-menu-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.scss',
  providers: [TreeDataService],
})
export class MenuViewComponent {

}
