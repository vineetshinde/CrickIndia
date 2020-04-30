import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../../services/players.service'
import {Player} from '../../beans/Player'
import { LoginService } from 'src/services/login.service';
import { TeamService } from 'src/services/team.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:Player[];

  constructor(private playerService : PlayersService, public loginService: LoginService, public teamService:TeamService) { 
    // this.playerService.gethttpplayers().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.players = data;
    // })
    this.players = this.playerService.getPlayers();
  }

  ngOnInit(): void {
  }

  showDetails(player:Player)
    {
        alert(player.id+" "+player.name+player.position);
    }
}


