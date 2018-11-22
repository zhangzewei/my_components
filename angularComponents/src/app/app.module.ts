import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollContainerComponent } from './components/scroll-container/scroll-container.component';
import { BottomNavComponent } from './containers/bottom-nav/bottom-nav.component';
import { XiamiPlayerComponent } from './containers/xiami-player/xiami-player.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollContainerComponent,
    BottomNavComponent,
    XiamiPlayerComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
