import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwColorSwatchComponent } from './tw-color-swatch.component';

describe('TwColorSwatchComponent', () => {
  let component: TwColorSwatchComponent;
  let fixture: ComponentFixture<TwColorSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwColorSwatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwColorSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
