import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWrapComponent } from './button-wrap.component';

describe('ButtonWrapComponent', () => {
  let component: ButtonWrapComponent;
  let fixture: ComponentFixture<ButtonWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonWrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
