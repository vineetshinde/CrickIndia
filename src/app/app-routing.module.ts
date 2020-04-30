import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import {PlayersComponent} from './players/players.component'
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';

const routes: Routes = [
  {path:"", component:  HomeComponent},
  {path:"login", component:  LoginComponent},
  {path:"team", component:  TeamComponent},
  {path:"players", component:  PlayersComponent},
  {path:"matchSchedule", component:  MatchScheduleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
