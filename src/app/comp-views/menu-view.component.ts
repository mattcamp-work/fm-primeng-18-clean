import { Component, OnInit } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MenuItem, MessageService } from 'primeng/api';
import { TreeDataService } from '~app/services/tree-data.service';
import { MegaMenuItem } from 'primeng/api';

import { MenuData} from './data_megaMenu';

@Component({
  selector: 'app-menu-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.scss',
  providers: [MessageService]
})
export class MenuViewComponent {

  //breadcrumbs
  breadCrumb_items: MenuItem[] | undefined;
  breadCrumb_home: MenuItem | undefined;

  //contextmenu
  contextMenu_items: MenuItem[] | undefined;

  //Menu
  menu_items: MenuItem[] | undefined;

  //Menu Bar
  menuBar_items: MenuItem[] | undefined;

  //Mega Menu
  megaMenu_items: MegaMenuItem[] | undefined;

  //Panel Menu
  panelMenu_items!: MenuItem[];

  //Steps
  steps_items: MenuItem[] | undefined;
  steps_active: number = 1;

  //Tiered Menu
   tieredMenu_items: MenuItem[] | undefined;


  ngOnInit() {

    // Breadcrumbs
    this.breadCrumb_items = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' }
    ];

    this.breadCrumb_home = { icon: 'pi pi-home', routerLink: '/' };

    // Context Menu
    this.contextMenu_items = [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    //Menu:
    this.menu_items = MenuData.menu;

    //Menubar items
    this.menuBar_items = MenuData.menuBar;

    //Mega Menu
    this.megaMenu_items = MenuData.megaMenu;

    //Panel Menu
    this.panelMenu_items = MenuData.panelMenu;

    //Tiered Menu

    this.tieredMenu_items = MenuData.tieredMenu;

    //Steps Items
    this.steps_items = [
            {
                label: 'Personal Info'
            },
            {
                label: 'Reservation'
            },
            {
                label: 'Review'
            }]


  }

}
