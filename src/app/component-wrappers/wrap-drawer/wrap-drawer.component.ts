import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

@Component({
  selector: 'app-wrap-drawer',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './wrap-drawer.component.html',
  styleUrl: './wrap-drawer.component.scss'
})
export class WrapDrawerComponent {
   visible: boolean = false;
}
