import { Component } from '@angular/core';


import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MenuItem, MessageService } from 'primeng/api';

import { data__cascadeSelect } from './data--cascadeSelect';


interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}


@Component({
  selector: 'app-input-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './input-view.component.html',
  styleUrl: './input-view.component.scss',
  providers: [MessageService],
})
export class InputViewComponent {

  //Cascade Select
  cascadeSelect__data ? : any = [];
  cascadeSelect__selected ? : any;
  cascadeSelect__optionGroupChildren ? : string[];
  cascadeSelect: any = {
    data: "adfkljds"
  };

  // Autocomplete
  autocomplete_items: any[] = [];
  autocomplete_value: any;
  autocomplete_search(event: AutoCompleteCompleteEvent) {
    this.autocomplete_items = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

  //Checkbox
  checkbox_pizza: string[] = [];

  // Datepicker
  date1 ? : Date | undefined = new Date();
  date2 ? : Date | undefined = new Date();
  date3 ? : Date | undefined = new Date();

  //Floatlabel
  floatLabel_value ? : String = "";

  //Ifta Label
  iftaLabel_value ? : String = "";

  //Input Mask
  inputMask_value1 ? : String;
  inputMask_value2 ? : String;
  inputMask_value3 ? : String;

  //Input Number
  inputNumber_value1 ? : Number = 42723;
  inputNumber_value2 ? : Number = 58151;
  inputNumber_value3 ? : Number = 2351.36;
  inputNumber_value4 ? : Number = 50;
  inputNumber_value5 ? : Number = 20.15;
  inputNumber_value6 ? : Number = 10.5;
  inputNumber_value7 ? : Number = 27.25;

  constructor() {
    this.cascadeSelect__data = data__cascadeSelect;
    this.cascadeSelect__optionGroupChildren = ['states', 'cities'];

    //this.date1 = new Date();

  }

}
