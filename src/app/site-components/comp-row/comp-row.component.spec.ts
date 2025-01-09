import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRowComponent } from './comp-row.component';

describe('CompRowComponent', () => {
  let component: CompRowComponent;
  let fixture: ComponentFixture<CompRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
