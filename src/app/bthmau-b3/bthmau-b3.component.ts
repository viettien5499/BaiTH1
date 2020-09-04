import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bthmau-b3',
  templateUrl: './bthmau-b3.component.html',
  styleUrls: ['./bthmau-b3.component.css']
})
export class BthmauB3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var a: number = 5;
    var b: number = 6;
    var h: number = 3;
    var hh = new HH(a,b,h);
    console.log(hh.TheTich())
  }

}
export class HCN {
  protected a:number;
  protected b:number;
  constructor(a:number,b:number){
    this.a=a;
    this.b=b;
  }
  public DienTich():number {
    return this.a*this.b;
  }
}
export class HH extends HCN {
  protected h:number;
  constructor(a:number,b:number, h: number){
    super(a,b);
    this.h = h;
  }
  public TheTich():number {
    return this.DienTich()*this.h;
  }
}


