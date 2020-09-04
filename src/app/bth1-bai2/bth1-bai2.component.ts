import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bth1-bai2',
  templateUrl: './bth1-bai2.component.html',
  styleUrls: ['./bth1-bai2.component.css']
})
export class Bth1Bai2Component implements OnInit {

  constructor() { }

  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  tinh(){
    let tmp=1;
    for(let i=1;i<=this.n;++i){
        this.s= this.s+ (Math.pow(-1,i))*(Math.pow(this.x,i)/lythua(i));
    }
  }

}
function lythua(a: number) {
  let lythua=1;
  for (let i = 1; i <=a; i++) {
    lythua*=i;
  }
  return lythua;
}
