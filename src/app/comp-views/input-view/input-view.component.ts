import { Component } from '@angular/core';


import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MenuItem, MessageService } from 'primeng/api';
import { TreeDataService } from '~app/services/tree-data.service'

import { data__cascadeSelect } from './data--cascadeSelect';




interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface City {
    name: string,
    code: string
}


@Component({
  selector: 'app-input-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './input-view.component.html',
  styleUrl: './input-view.component.scss',
  providers: [MessageService,TreeDataService],
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

  //Input Text
  inputText_value?: String = "";

  //Knob
  knob_value1?:any = 10;
  knob_value2?:any = 15;

  //listBox
  listBox_data!: City[];
  listBox_selected!: City;

  //MultiSelect
  multiSelect_data!: City[];
  multiSelect_selected!: City[];

  //Password
  password_value?:String;

  // Radio Button
  rButton_value?:any;

  //Rating
  rating_value?:any;

  //Select
  select_data!: City[];
  select_selected!: City[];

  //Select Button
  selectButton_options: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];
  selectButton_value: string = 'off'

  //Slider Value
  slider_value?:any;

  //Text Area
  textArea_value?:any;

  //Toggle Button
  toggleButton_checked?:boolean = false;

  //Toggle Switch
  toggleSwitch_checked?:boolean = false;

  //Tree Select 

  treeSelect_nodes!: any[];

  treeSelect_selectedNodes: any;

 

  constructor(private _treeDataService: TreeDataService) {
    this.cascadeSelect__data = data__cascadeSelect;
    this.cascadeSelect__optionGroupChildren = ['states', 'cities'];

    //this.date1 = new Date();
    this.knob_value1 = 11;
    this.knob_value2 = 12;

     this.listBox_data = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

       this.multiSelect_data = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.select_data = [
            {name: 'Flavor Town', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

       this._treeDataService.getFiles().then((files) => (this.treeSelect_nodes = files));
  }

}
