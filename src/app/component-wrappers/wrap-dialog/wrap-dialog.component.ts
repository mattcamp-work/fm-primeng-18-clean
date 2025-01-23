import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';


@Component({
  selector: 'app-wrap-dialog',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './wrap-dialog.component.html',
  styleUrl: './wrap-dialog.component.scss'
})
export class WrapDialogComponent {

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

}
