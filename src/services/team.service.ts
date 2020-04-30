import {Injectable} from '@angular/core';
import { Player } from 'src/beans/Player';

@Injectable()

export class TeamService{

    teamarr:Player[];
    teamarr1:Player[];
    playerid:number;

    constructor()
    {
       
        this.teamarr1 = new Array <Player>();
        localStorage.clear();
    }
    add(obj:Player )
    {
    
        var i = 0;
        if(localStorage.getItem('teamkey') != null)
        {
        this.teamarr1 = JSON.parse(localStorage.getItem('teamkey'));

        for(i = 0 ; i < this.teamarr1.length ;i++)
        {
            if(this.teamarr1[i].id === obj.id)
            break;
        }

        
        
            if(i === this.teamarr1.length && this.teamarr1.length < 11)
            {
                this.teamarr.push(obj);
                localStorage.setItem('teamkey',JSON.stringify(this.teamarr));
                console.log("Player added");
            }
            else if(this.teamarr1.length === 11)
            {
                alert("Team Made");
            console.log("team made");
            }
            else if(i < this.teamarr1.length)
            console.log("player already in team");

        }
        else
        {
            this.teamarr = new Array <Player>();
            this.teamarr.push(obj);
            localStorage.setItem('teamkey',JSON.stringify(this.teamarr));
            console.log("Player added");
        }
        
        //console.log(obj);

    }

    getTeam():Array<Player>
    {
        this.teamarr = JSON.parse(localStorage.getItem('teamkey'));
        console.log(this.teamarr);
        return this.teamarr;
    }
}