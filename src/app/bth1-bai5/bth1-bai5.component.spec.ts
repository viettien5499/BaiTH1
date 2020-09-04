import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bth1Bai5Component } from './bth1-bai5.component';

describe('Bth1Bai5Component', () => {
  let component: Bth1Bai5Component;
  let fixture: ComponentFixture<Bth1Bai5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bth1Bai5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bth1Bai5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
