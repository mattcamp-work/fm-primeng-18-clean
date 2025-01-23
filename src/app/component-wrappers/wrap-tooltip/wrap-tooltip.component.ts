import { Component } from '@angular/core';


import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

@Component({
  selector: 'app-wrap-tooltip',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './wrap-tooltip.component.html',
  styleUrl: './wrap-tooltip.component.scss'
})
export class WrapTooltipComponent {

}
