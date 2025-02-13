import { Component } from '@angular/core';

@Component({
  selector: 'app-tw-grids',
  standalone: true,
  imports: [],
  templateUrl: './tw-grids.component.html',
  styleUrl: './tw-grids.component.scss'
})
export class TwGridsComponent {


  breakPoints:any = [
  {
    "name": "sm",
    "width": "40rem (640px)",
    "css": "@media (width >= 40rem)"
  },
  {
    "name": "md",
    "width": "48rem (768px)",
    "css": "@media (width >= 48rem)"
  },
  {
    "name": "lg",
    "width": "64rem (1024px)",
    "css": "@media (width >= 64rem)"
  },
  {
    "name": "xl",
    "width": "80rem (1280px)",
    "css": "@media (width >= 80rem)"
  },
  {
    "name": "2xl",
    "width": "96rem (1536px)",
    "css": "@media (width >= 96rem)"
  }
];


}
