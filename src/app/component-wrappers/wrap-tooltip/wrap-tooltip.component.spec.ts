import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapTooltipComponent } from './wrap-tooltip.component';

describe('WrapTooltipComponent', () => {
  let component: WrapTooltipComponent;
  let fixture: ComponentFixture<WrapTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
