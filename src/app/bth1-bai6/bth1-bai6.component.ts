import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bth1-bai6',
  templateUrl: './bth1-bai6.component.html',
  styleUrls: ['./bth1-bai6.component.css']
})
export class Bth1Bai6Component implements OnInit {

  constructor() { }
   s = [-1,-5,3,4,8,,-43,10,25,55];
   tong=0;
  ngOnInit(): void {
    for(let i=0; i<this.s.length;i++)
    {
      if(this.s[i]>0)
      this.tong+=this.s[i];
    }
    console.log(this.tong)
  }

}
