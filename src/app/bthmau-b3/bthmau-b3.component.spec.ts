import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BthmauB3Component } from './bthmau-b3.component';

describe('BthmauB3Component', () => {
  let component: BthmauB3Component;
  let fixture: ComponentFixture<BthmauB3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BthmauB3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BthmauB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
