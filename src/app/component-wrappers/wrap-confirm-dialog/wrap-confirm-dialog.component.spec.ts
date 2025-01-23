import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapConfirmDialogComponent } from './wrap-confirm-dialog.component';

describe('WrapConfirmDialogComponent', () => {
  let component: WrapConfirmDialogComponent;
  let fixture: ComponentFixture<WrapConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapConfirmDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
