import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWrapComponent } from './modal-wrap.component';

describe('ModalWrapComponent', () => {
  let component: ModalWrapComponent;
  let fixture: ComponentFixture<ModalWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalWrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
