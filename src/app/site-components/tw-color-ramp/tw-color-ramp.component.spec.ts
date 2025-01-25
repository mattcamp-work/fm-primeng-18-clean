import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwColorRampComponent } from './tw-color-ramp.component';

describe('TwColorRampComponent', () => {
  let component: TwColorRampComponent;
  let fixture: ComponentFixture<TwColorRampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwColorRampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwColorRampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
