import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelkaComponent } from './tabelka.component';

describe('TabelkaComponent', () => {
  let component: TabelkaComponent;
  let fixture: ComponentFixture<TabelkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
