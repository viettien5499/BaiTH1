import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bth1-bai8',
  templateUrl: './bth1-bai8.component.html',
  styleUrls: ['./bth1-bai8.component.css']
})
export class Bth1Bai8Component implements OnInit {

  constructor() { }
  h: any;
  dt: any;
  kq: any;
  ngOnInit(): void {

  }
  tinh(){
    this.kq= (this.h*this.dt)/3;
  }

}

