import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from '../beans/Player'
@Injectable()

export class PlayersService{

arrplayer:Player[];

constructor(private httpclient:HttpClient)
{
    let p1 = new Player(1,"Rohit Sharma","Opener","./assets/images/rohitsharma.jpg");
    let p3 = new Player(2,"Virat Kohli","Batsman","./assets/images/viratkohli.jpg");
    let p2 = new Player(4,"MS Dhoni","Wicket Keeper","./assets/images/dhoni.jpg");
    
    this.arrplayer = new Array<Player>();
    this.arrplayer.push(p1);
    this.arrplayer.push(p3);
    this.arrplayer.push(p2);
}
    getPlayers():Array<Player>
    {
        return this.arrplayer;
      
    }
    // gethttpplayers()
    // {
    //     return this.httpclient.get("http://localhost:8000/players");
    // }

    
}
