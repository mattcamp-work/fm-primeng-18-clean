import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemoComponentComponent } from './angular-demo-component.component';

describe('AngularDemoComponentComponent', () => {
  let component: AngularDemoComponentComponent;
  let fixture: ComponentFixture<AngularDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDemoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
