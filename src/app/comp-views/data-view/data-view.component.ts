import { Component,  ChangeDetectorRef } from '@angular/core';
import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { TreeNode } from 'primeng/api';

import { ProductService } from '~app/services/product.service'
import { OrgChartData } from './data-orgChart';
import { TreeDataService } from '~app/services/tree-data.service'


export interface Product {
  id ? : string;
  code ? : string;
  name ? : string;
  description ? : string;
  price ? : number;
  quantity ? : number;
  inventoryStatus ? : string;
  category ? : string;
  image ? : string;
  rating ? : number;
}


@Component({
  selector: 'app-data-view',
  standalone: true,
  templateUrl: './data-view.component.html',
  imports: [PrimengImportsModule],
  styleUrl: './data-view.component.scss',
  providers: [ProductService, TreeDataService]
})
export class DataViewComponent {

  //Orderlist 
  orderList_products!: Product[];

  //Org Chart
  orgChart_data = OrgChartData;

  //Picklist
  pickList_sourceProducts?: Product[];
  pickList_targetProducts?: Product[];

  //Table
  table_products!: Product[];
  table_sizes!: any[];
  table_selectedSize: any = '';

  //Timeline
  timeline_events?: any[];

  //Tree
   tree_files!: TreeNode[];

   //Tree Table
   treeTable_files!: TreeNode[]; 

    constructor(
      private productService: ProductService,
      private tableProductService: ProductService,
      private carService: ProductService,
      private cdr: ChangeDetectorRef,
      private treeDataService: TreeDataService,
      //private treeTableDataService: TreeDataService,
      ) {}

    ngOnInit() {
        
        //org chart
        this.productService.getProductsSmall().then((cars) => (this.orderList_products = cars));

        //picklist
        this.carService.getProductsSmall().then(products => {
            this.pickList_sourceProducts = products;
            this.cdr.markForCheck();
        });
        this.pickList_targetProducts = [];

        //Table
        this.tableProductService.getProductsMini().then((data) => {
            this.table_products = data;
        });
        this.table_sizes = [
            { name: 'Small', class: 'p-datatable-sm' },
            { name: 'Normal', class: '' },
            { name: 'Large',  class: 'p-datatable-lg' }
        ];

        //timeline
         this.timeline_events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];

        //Tree
         this.treeDataService.getFiles().then((data) => (this.tree_files = data));

        //Tree Table
         this.treeDataService.getFilesystem().then((files) => (this.treeTable_files = files));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'unknown'; 
        }
    }


  



}
