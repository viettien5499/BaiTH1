import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BthmauB1Component } from './bthmau-b1.component';

describe('BthmauB1Component', () => {
  let component: BthmauB1Component;
  let fixture: ComponentFixture<BthmauB1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BthmauB1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BthmauB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
