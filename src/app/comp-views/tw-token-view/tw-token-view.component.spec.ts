import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwTokenViewComponent } from './tw-token-view.component';

describe('TwTokenViewComponent', () => {
  let component: TwTokenViewComponent;
  let fixture: ComponentFixture<TwTokenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwTokenViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwTokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
