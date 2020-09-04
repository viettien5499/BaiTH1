import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BthmauB2Component } from './bthmau-b2.component';

describe('BthmauB2Component', () => {
  let component: BthmauB2Component;
  let fixture: ComponentFixture<BthmauB2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BthmauB2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BthmauB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
