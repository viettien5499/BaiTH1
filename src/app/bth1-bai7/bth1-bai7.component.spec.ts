import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth1Bai7Component } from './bth1-bai7.component';

describe('Bth1Bai7Component', () => {
  let component: Bth1Bai7Component;
  let fixture: ComponentFixture<Bth1Bai7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth1Bai7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth1Bai7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
