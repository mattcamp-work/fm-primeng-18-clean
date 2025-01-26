import { Component, OnInit } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';
import { MenuItem, MessageService } from 'primeng/api';
import { TreeDataService } from '~app/services/tree-data.service'

import { ProductService } from '~app/services/product.service';

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
  selector: 'app-media-view',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './media-view.component.html',
  styleUrl: './media-view.component.scss',
  providers: [TreeDataService, ProductService],
})

export class MediaViewComponent implements OnInit {




  carousel_products ? : Product[] = [];

  carousel_responsiveOptions ? : any[] = [];

  constructor(private carousel_productService: ProductService) {

  }

  ngOnInit() {

    this.carousel_productService.getProductsSmall().then((products) => {
      this.carousel_products = products;
    });

    this.carousel_responsiveOptions = [{
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]


  }

  getSeverity(status: any = ''): any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined; // Return `undefined` instead of an empty string for better type safety
    }
  }
}
