import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapPopoverComponent } from './wrap-popover.component';

describe('WrapPopoverComponent', () => {
  let component: WrapPopoverComponent;
  let fixture: ComponentFixture<WrapPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapPopoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
