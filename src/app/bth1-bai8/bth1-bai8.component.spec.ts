import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth1Bai8Component } from './bth1-bai8.component';

describe('Bth1Bai8Component', () => {
  let component: Bth1Bai8Component;
  let fixture: ComponentFixture<Bth1Bai8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth1Bai8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth1Bai8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
