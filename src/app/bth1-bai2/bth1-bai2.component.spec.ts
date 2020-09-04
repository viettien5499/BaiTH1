import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth1Bai2Component } from './bth1-bai2.component';

describe('Bth1Bai2Component', () => {
  let component: Bth1Bai2Component;
  let fixture: ComponentFixture<Bth1Bai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth1Bai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth1Bai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
