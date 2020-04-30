import{Injectable} from '@angular/core';
import{Observable,of} from 'rxjs';
import { log } from 'util';

@Injectable()

export class LoginService{

  username:string ="User";
  

    onSubmit(value:any):Observable<boolean>
  {
    console.log(JSON.stringify(value));
    var obj = JSON.parse(JSON.stringify(value));

    if(obj.usr === "admin" && obj.pwd === "admin" ||obj.usr === "guest" && obj.pwd === "guest")
    {
        console.log('inside submit');
        
      if(obj.usr === "admin")
      this.username = "admin";
      else
       this.username = "Guest";
       
        return of(true);
    }
    else
    {
        console.log('inside false');
        
     return of(false);
    }
  }

  isAdmin():boolean{

    if(this.username === "admin")
        return true;

    return false;
  }
}