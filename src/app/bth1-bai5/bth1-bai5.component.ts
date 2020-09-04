import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bth1-bai5',
  templateUrl: './bth1-bai5.component.html',
  styleUrls: ['./bth1-bai5.component.css']
})
export class Bth1Bai5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sochinhphuong = (n) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    let s = [3,4,8,10,25,55].filter(sochinhphuong);
    console.log(s);
  }

}
