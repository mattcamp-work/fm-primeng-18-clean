import { Component } from '@angular/core';


import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

@Component({
  selector: 'app-wrap-popover',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './wrap-popover.component.html',
  styleUrl: './wrap-popover.component.scss'
})
export class WrapPopoverComponent {

  members = [
        { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
    ];

}
