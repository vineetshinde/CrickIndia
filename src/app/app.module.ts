import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PlayersComponent } from './players/players.component';
import { TeamComponent } from './team/team.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { PlayersService } from 'src/services/players.service';
import { HttpClientModule } from '@angular/common/http';
import {LoginService} from 'src/services/login.service'
import { FormsModule } from "@angular/forms";
import { TeamService } from 'src/services/team.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    PlayersComponent,
    TeamComponent,
    MatchScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlayersService,LoginService,TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
