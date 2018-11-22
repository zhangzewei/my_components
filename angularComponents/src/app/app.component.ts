import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { get } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showBottomNav = true;
  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ).subscribe((_: NavigationEnd) => {
      console.log(this.route)
      this.showBottomNav = get(this.route, 'snapshot.firstChild.data.showBottomNav', true);
    });
  }
}
