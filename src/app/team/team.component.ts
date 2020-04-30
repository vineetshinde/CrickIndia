import { Component, OnInit } from '@angular/core';
import { Player } from 'src/beans/Player';
import { TeamService } from 'src/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team:Player[];
  playerid:number;
  constructor(public teamservice:TeamService)
  {
      this.team = this.teamservice.getTeam();
     this.playerid =  this.teamservice.playerid;
  }

  ngOnInit(): void {
  }

}
