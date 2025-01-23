import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapDynamicDialogComponent } from './wrap-dynamic-dialog.component';

describe('WrapDynamicDialogComponent', () => {
  let component: WrapDynamicDialogComponent;
  let fixture: ComponentFixture<WrapDynamicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapDynamicDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapDynamicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
