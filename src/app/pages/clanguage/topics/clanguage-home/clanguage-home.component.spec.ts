import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanguageHomeComponent } from './clanguage-home.component';

describe('ClanguageHomeComponent', () => {
  let component: ClanguageHomeComponent;
  let fixture: ComponentFixture<ClanguageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanguageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanguageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
