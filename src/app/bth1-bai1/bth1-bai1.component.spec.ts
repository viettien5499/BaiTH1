import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTH1Bai1Component } from './bth1-bai1.component';

describe('BTH1Bai1Component', () => {
  let component: BTH1Bai1Component;
  let fixture: ComponentFixture<BTH1Bai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTH1Bai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTH1Bai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
