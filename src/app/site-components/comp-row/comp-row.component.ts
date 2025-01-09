import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comp-row',
  standalone: true,
  imports: [],
  templateUrl: './comp-row.component.html',
  styleUrl: './comp-row.component.scss'
})
export class CompRowComponent implements OnInit, OnChanges, OnDestroy {

     // Input properties
  @Input() title: string = 'Default Title';
  @Input() description: string = 'Default Description';

  // Output properties
  @Output() buttonClicked = new EventEmitter<void>();

  // Lifecycle hooks
  constructor() {
    console.log('TemplateComponent: constructor called');
  }

  ngOnInit(): void {
    console.log('TemplateComponent: ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('TemplateComponent: ngOnChanges called', changes);
  }

  ngOnDestroy(): void {
    console.log('TemplateComponent: ngOnDestroy called');
  }

  // Event handler method
  onButtonClick(): void {
    console.log('Button clicked!');
    this.buttonClicked.emit();
  }


}
