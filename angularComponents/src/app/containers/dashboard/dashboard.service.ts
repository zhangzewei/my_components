import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Menu {
  name: string;
  path: string;
  bgColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  mockData = [
    {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }, {
      name: '虾米音乐播放器例子',
      path: '/xiami-player',
    }
  ];

  menu_colors = ['#FF3900', '#00FF76', '#2BC874', '#C84E2B'];

  constructor() { }

  getMenus(): Observable<Array<Menu>> {
    return of(this.mockData);
  }

  getMenuColors(): Observable<Array<string>> {
    return of(this.menu_colors);
  }
}
