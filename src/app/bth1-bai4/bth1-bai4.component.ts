import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bth1-bai4',
  templateUrl: './bth1-bai4.component.html',
  styleUrls: ['./bth1-bai4.component.css']
})
export class Bth1Bai4Component implements OnInit {

  constructor() { }
  s = [{hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9},
       {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},
       { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}
      ];
  ngOnInit(): void {
    console.log(this.s.filter(sv => {
      return sv.diemthi > 8 && sv.quequan == 'Hai Phong';
    }));
  }

}

