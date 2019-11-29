import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzablonInlineComponent } from './szablon-inline.component';

describe('SzablonInlineComponent', () => {
  let component: SzablonInlineComponent;
  let fixture: ComponentFixture<SzablonInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzablonInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzablonInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
