import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwCheatSheetComponent } from './tw-cheat-sheet.component';

describe('TwCheatSheetComponent', () => {
  let component: TwCheatSheetComponent;
  let fixture: ComponentFixture<TwCheatSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwCheatSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwCheatSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
