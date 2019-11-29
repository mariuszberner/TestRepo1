import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatkaSposob1Component } from './formatka-sposob1.component';

describe('FormatkaSposob1Component', () => {
  let component: FormatkaSposob1Component;
  let fixture: ComponentFixture<FormatkaSposob1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatkaSposob1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatkaSposob1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
