import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalendarWrapComponent } from './input-calendar-wrap.component';

describe('InputCalendarWrapComponent', () => {
  let component: InputCalendarWrapComponent;
  let fixture: ComponentFixture<InputCalendarWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCalendarWrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCalendarWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
