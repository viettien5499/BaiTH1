import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bthmau-b1',
  templateUrl: './bthmau-b1.component.html',
  styleUrls: ['./bthmau-b1.component.css']
})
export class BthmauB1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
let n = 10;
let s = 0;
for(let i=1;i<=n;++i){
   s += 1.0/i;
}
console.log(s);     

