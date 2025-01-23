import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapDialogComponent } from './wrap-dialog.component';

describe('WrapDialogComponent', () => {
  let component: WrapDialogComponent;
  let fixture: ComponentFixture<WrapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
