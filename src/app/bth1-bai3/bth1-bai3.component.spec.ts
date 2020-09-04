import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth1Bai3Component } from './bth1-bai3.component';

describe('Bth1Bai3Component', () => {
  let component: Bth1Bai3Component;
  let fixture: ComponentFixture<Bth1Bai3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth1Bai3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth1Bai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
