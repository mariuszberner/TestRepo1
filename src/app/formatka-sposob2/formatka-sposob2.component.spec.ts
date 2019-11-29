import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatkaSposob2Component } from './formatka-sposob2.component';

describe('FormatkaSposob2Component', () => {
  let component: FormatkaSposob2Component;
  let fixture: ComponentFixture<FormatkaSposob2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatkaSposob2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatkaSposob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
