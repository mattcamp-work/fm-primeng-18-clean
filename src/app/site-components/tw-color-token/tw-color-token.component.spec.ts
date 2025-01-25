import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwColorTokenComponent } from './tw-color-token.component';

describe('TwColorTokenComponent', () => {
  let component: TwColorTokenComponent;
  let fixture: ComponentFixture<TwColorTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwColorTokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwColorTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
