import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth1Bai4Component } from './bth1-bai4.component';

describe('Bth1Bai4Component', () => {
  let component: Bth1Bai4Component;
  let fixture: ComponentFixture<Bth1Bai4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth1Bai4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth1Bai4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
