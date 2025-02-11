import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwFontsComponent } from './tw-fonts.component';

describe('TwFontsComponent', () => {
  let component: TwFontsComponent;
  let fixture: ComponentFixture<TwFontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwFontsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
