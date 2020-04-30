import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }
  
  username: string;
  password: String;
  
  ngOnInit(): void {
  }

  onSubmit(value:any)
  {
    

    this.loginservice.onSubmit(value).subscribe(
      res=>{
        if(res)
        {
          if(this.username === "admin")
          {

        this.router.navigate(['players']);
        console.log("admin login");
          }

        else if(this.username === "guest")
        this.router.navigate(['']);
        }
      }
    );
  }
}
