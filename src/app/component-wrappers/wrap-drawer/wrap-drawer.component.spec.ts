import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapDrawerComponent } from './wrap-drawer.component';

describe('WrapDrawerComponent', () => {
  let component: WrapDrawerComponent;
  let fixture: ComponentFixture<WrapDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
