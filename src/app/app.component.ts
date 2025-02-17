import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; 


import { CommonModule } from '@angular/common'; 
import { PrimengImportsModule } from './primeng-imports/primeng-imports-fixed.module'; 
import { SiteComponentsModule } from './site-components/site-components.module'; 
import { CompViewsModule } from './comp-views/comp-views.module';

//import { TabsModule } from 'primeng/tabs';



//import {InputCalendarWrapComponent } from './component-wrappers/input-calendar-wrap/input-calendar-wrap.component'; 
//import { CompRowComponent } from './button-test/button-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      RouterModule,
      SiteComponentsModule,
      PrimengImportsModule,
      CompViewsModule,
      //TabsModule,
      //ComponentWrappersModule_fm,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-18-clean';
}
