import { Component } from '@angular/core';

import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';

@Component({
  selector: 'app-input-calendar-wrap',
  templateUrl: './input-calendar-wrap.component.html',
  styleUrl: './input-calendar-wrap.component.scss',
  imports: [DatePickerModule, FormsModule, FluidModule],
  standalone:true
})
export class InputCalendarWrapComponent {

     date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;

}
