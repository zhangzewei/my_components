import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XiamiPlayerComponent } from './containers/xiami-player/xiami-player.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AnimateVoteComponent } from './containers/animate-vote/animate-vote.component';
import { DataFlowComponent } from './containers/data-flow-practice/data-flow.component';
import { TodoDetailComponent } from './containers/data-flow-practice/container/item-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'xiami-player', component: XiamiPlayerComponent },
  { path: 'animate-vote', component: AnimateVoteComponent },
  { path: 'todolist-demo', component: DataFlowComponent },
  { path: 'todolist-detail/:id', component: TodoDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
