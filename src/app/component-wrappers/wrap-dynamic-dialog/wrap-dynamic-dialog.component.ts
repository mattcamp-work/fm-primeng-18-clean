import { Component } from '@angular/core';


import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

@Component({
  selector: 'app-wrap-dynamic-dialog',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './wrap-dynamic-dialog.component.html',
  styleUrl: './wrap-dynamic-dialog.component.scss'
})
export class WrapDynamicDialogComponent {

   members = [
        { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
    ];

}
