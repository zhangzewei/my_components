import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ScrollContainerComponent } from './components/scroll-container/scroll-container.component';
import { BottomNavComponent } from './containers/bottom-nav/bottom-nav.component';
import { XiamiPlayerComponent } from './containers/xiami-player/xiami-player.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ReplyContainerComponent } from './containers/xiami-player/component/reply-container/reply-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollContainerComponent,
    BottomNavComponent,
    XiamiPlayerComponent,
    DashboardComponent,
    ReplyContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
