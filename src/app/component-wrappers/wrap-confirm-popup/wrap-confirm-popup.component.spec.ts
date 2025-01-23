import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapConfirmPopupComponent } from './wrap-confirm-popup.component';

describe('WrapConfirmPopupComponent', () => {
  let component: WrapConfirmPopupComponent;
  let fixture: ComponentFixture<WrapConfirmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapConfirmPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
