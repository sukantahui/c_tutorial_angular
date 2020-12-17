import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorPrecedenceComponent } from './operator-precedence.component';

describe('OperatorPrecedenceComponent', () => {
  let component: OperatorPrecedenceComponent;
  let fixture: ComponentFixture<OperatorPrecedenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorPrecedenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorPrecedenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
