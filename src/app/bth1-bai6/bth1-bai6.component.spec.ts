import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth1Bai6Component } from './bth1-bai6.component';

describe('Bth1Bai6Component', () => {
  let component: Bth1Bai6Component;
  let fixture: ComponentFixture<Bth1Bai6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth1Bai6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth1Bai6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
