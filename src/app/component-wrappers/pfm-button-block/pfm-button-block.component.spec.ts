import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfmButtonBlockComponent } from './pfm-button-block.component';

describe('PfmButtonBlockComponent', () => {
  let component: PfmButtonBlockComponent;
  let fixture: ComponentFixture<PfmButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PfmButtonBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfmButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
