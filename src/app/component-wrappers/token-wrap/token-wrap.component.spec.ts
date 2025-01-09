import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenWrapComponent } from './token-wrap.component';

describe('TokenWrapComponent', () => {
  let component: TokenWrapComponent;
  let fixture: ComponentFixture<TokenWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TokenWrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
