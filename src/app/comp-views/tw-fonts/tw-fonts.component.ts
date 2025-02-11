import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common'; 

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

import { SiteComponentsModule  } from '~/app/site-components/site-components.module';

//import { CodeCopyComponent } from '~/app/site-components/code-copy/code-copy.component';

@Component({
  selector: 'app-tw-fonts',
  standalone: true,
  imports: [CommonModule, PrimengImportsModule,  SiteComponentsModule ],
  templateUrl: './tw-fonts.component.html',
  styleUrl: './tw-fonts.component.scss'
})
export class TwFontsComponent implements OnInit {




  ngOnInit() {

  }


removePrefix = function(_source:string,_prefix:string="foo"){

  let _target = new RegExp(_prefix,'igm');

  return _source.replace(_target,'');
}


fontUtilties = [{
  class: "font-sans",
  css: "font-family: var(--font-sans)"
},
{
  class: "font-serif",
  css: "font-family: var(--font-serif)"
},
{
  class: "font-mono",
  css: "font-family: var(--font-mono)"
},
{
  class: "italic",
  css: "font-style: italic"
},
{
  class: "non-italic",
  css: "font-style: normal"
}
]



fontWeights = [{
  class: "font-thin",
  css: "font-weight: 100"
},
{
  class: "font-extralight",
  css: "font-weight: 200"
},
{
  class: "font-light",
  css: "font-weight: 300"
},
{
  class: "font-normal",
  css: "font-weight: 400"
},
{
  class: "font-medium",
  css: "font-weight: 500"
},
{
  class: "font-semibold",
  css: "font-weight: 600"
},
{
  class: "font-bold",
  css: "font-weight: 700"
},
{
  class: "font-extrabold",
  css: "font-weight: 800"
},
{
  class: "font-black",
  css: "font-weight: 900"
},
{
  class: "font-(<custom-property>)",
  css: "font-weight: var(<custom-property>)"
},
{
  class: "font-[<value>]",
  css: "font-weight: <value>"
}]



 fontSizes:any  = [
  {
    "sample": "Text-xs",
    "class": "text-xs",
    "rem": "0.75rem",
    "px": "12px"
  },
  {
    "sample": "Text-sm",
    "class": "text-sm",
    "rem": "0.875rem",
    "px": "14px"
  },
  {
    "sample": "Text-base",
    "class": "text-base",
    "rem": "1rem",
    "px": "16px"
  },
  {
    "sample": "Text-lg",
    "class": "text-lg",
    "rem": "1.125rem",
    "px": "18px"
  },
  {
    "sample": "Text-xl",
    "class": "text-xl",
    "rem": "1.25rem",
    "px": "20px"
  },
  {
    "sample": "Text-2xl",
    "class": "text-2xl",
    "rem": "1.5rem",
    "px": "24px"
  },
  {
    "sample": "Text-3xl",
    "class": "text-3xl",
    "rem": "1.875rem",
    "px": "30px"
  },
  {
    "sample": "Text-4xl",
    "class": "text-4xl",
    "rem": "2.25rem",
    "px": "36px"
  },
  {
    "sample": "Text-5xl",
    "class": "text-5xl",
    "rem": "3rem",
    "px": "48px"
  },
  {
    "sample": "Text-6xl",
    "class": "text-6xl",
    "rem": "3.75rem",
    "px": "60px"
  },
  {
    "sample": "Text-7xl",
    "class": "text-7xl",
    "rem": "4.5rem",
    "px": "72px"
  }
];




}
