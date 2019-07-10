import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grow-number',
  templateUrl: './grow-number.component.html',
  styleUrls: ['./grow-number.component.css']
})
export class GrowNumberComponent implements OnInit {
  @Input() maxNum;
  @Input() during = 1000;
  @Input() suffix = "";
  timer = null;
  num = 0;
  constructor() { }

  ngOnInit() {
    const speed = this.maxNum ? (this.during / this.maxNum) * 1 : 100;
    this.growingNumber(speed);
  }

  growingNumber(speed: number) {
    this.timer = setInterval(() => {
      if (this.num < this.maxNum) {
        this.num++;
      } else {
        clearInterval(this.timer);
        this.timer = null;
      }
    }, speed || 100);
  }

}
