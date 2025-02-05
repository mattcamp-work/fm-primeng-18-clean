import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module'; 
import { SiteComponentsModule } from '~app/site-components/site-components.module'; 
import { CompViewsModule } from '~/app/comp-views/comp-views.module';



@Component({
  selector: 'app-primeng-comps',
  standalone: true,
  imports: [CommonModule,PrimengImportsModule,SiteComponentsModule,CompViewsModule],
  templateUrl: './primeng-comps.component.html',
  styleUrl: './primeng-comps.component.scss'
})
export class PrimengCompsComponent {

}
