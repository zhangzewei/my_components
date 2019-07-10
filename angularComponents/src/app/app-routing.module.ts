import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XiamiPlayerComponent } from './containers/xiami-player/xiami-player.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AnimateVoteComponent } from './containers/animate-vote/animate-vote.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'xiami-player', component: XiamiPlayerComponent },
  { path: 'animate-vote', component: AnimateVoteComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
