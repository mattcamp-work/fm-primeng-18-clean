import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwGridsComponent } from './tw-grids.component';

describe('TwGridsComponent', () => {
  let component: TwGridsComponent;
  let fixture: ComponentFixture<TwGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwGridsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
