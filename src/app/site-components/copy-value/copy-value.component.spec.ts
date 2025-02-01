import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyValueComponent } from './copy-value.component';

describe('CopyValueComponent', () => {
  let component: CopyValueComponent;
  let fixture: ComponentFixture<CopyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
