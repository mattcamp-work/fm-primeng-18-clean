import { Component } from '@angular/core';

//import { SiteComponentsModule } from '~/app/site-components/site-components-module';

import { SiteComponentsModule } from '~/app/site-components/site-components.module';

@Component({
  selector: 'app-tw-cheat-sheet',
  standalone: true,
  imports: [SiteComponentsModule],
  templateUrl: './tw-cheat-sheet.component.html',
  styleUrl: './tw-cheat-sheet.component.scss'
})
export class TwCheatSheetComponent {

}
