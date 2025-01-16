import { Component } from '@angular/core';

//import { PrimengImportsModule } from '~/primeng-imports/primeng-imports.module';

import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';


@Component({
  selector: 'app-input-radio-button',
  templateUrl: './input-radio-button.component.html',
  styleUrl: './input-radio-button.component.scss',
  imports: [FormsModule, Checkbox],
  standalone:true,
})
export class InputRadioButtonComponent {
    pizza: string[] = [];
}
