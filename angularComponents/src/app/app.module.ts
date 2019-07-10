import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { XiamiPlayerComponent } from './containers/xiami-player/xiami-player.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ReplyContainerComponent } from './containers/xiami-player/component/reply-container/reply-container.component';
import { AnimateVoteComponent } from './containers/animate-vote/animate-vote.component';
import { GrowNumberComponent } from './containers/animate-vote/components/grow-number/grow-number.component';

@NgModule({
  declarations: [
    AppComponent,
    XiamiPlayerComponent,
    DashboardComponent,
    ReplyContainerComponent,
    AnimateVoteComponent,
    GrowNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
