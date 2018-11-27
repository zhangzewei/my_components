import { Component, OnInit } from '@angular/core';
import { Menu, DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  colorIndex = 0;
  menu_colors = [];
  menus = [];

  constructor(
    public service: DashboardService
  ) { }

  ngOnInit() {
    this.service.getMenuColors().subscribe((colors: Array<string>): Array<string> => this.menu_colors = colors);
    this.service.getMenus().subscribe((menus: Array<Menu>): void => {
      menus.forEach(m => m.bgColor = this._randomColor());
      // 在没有加上面这句话可以去掉 ExpressionChangedAfterItHasBeenCheckedError
      // 这代表ng也开始期望不在dom中进行动态操作，一切以数据进行驱动，
      // 在这之前我是将 _randomColor() 函数放在dom中直接调用的
      this.menus = menus;
    });
  }

  _randomColor(): string {
    const color = this.menu_colors[this.colorIndex];
    this.colorIndex++;
    if (this.colorIndex === this.menu_colors.length) this.colorIndex = 0
    return color;
  }

}
