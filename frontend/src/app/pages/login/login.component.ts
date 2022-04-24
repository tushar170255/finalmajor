import { Component, OnInit } from '@angular/core';
// import { throws } from 'assert';
import { NeedyService } from 'src/app/services/needy.service';
import{HeroService} from 'src/app/services/hero.service';
import {AdminService} from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login ={
    "usrName":'',
    "password":'',
    "type":''
  }
  public static adminResponse :any;
  public static needyResponse: any; 
  constructor(private needyService: NeedyService, private heroService: HeroService , private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
    let type = window.localStorage.getItem('type');
    if(type=='needy') this.router.navigate(["/needypage"]);
    if(type=='hero') this.router.navigate(["/heropage"]);
    if(type=='admin') this.router.navigate(["/adminpage"]);
  }
  formSubmit()
  {
    if(this.login.type=="0")
    {
      this.needyService.loginNeedy(this.login).subscribe(
        (data : any)=>{
         LoginComponent.needyResponse=data;
          console.log(data);
          Swal.fire( {title: 'User is Successfully logged in',
          html: "We are with you",
          text: 'Redirecting...',
          icon: 'success',
          showConfirmButton:true,
          didClose: ()=>{
            window.localStorage.setItem("username",data.usrName);
            window.localStorage.setItem("password",data.password);
            window.localStorage.setItem("type",'needy');
            
            this.router.navigate(["/needypage"])}
          })
         
        }
        ,(error)=>{
          console.log(error);
          alert('error occured!!!');
        }
      )
    }
    else if(this.login.type=="1"){
      this.heroService.loginHero(this.login).subscribe(
        (data : any)=>{
          Swal.fire( {title: 'User is Successfully loggedin',
          html: "We are with you",
          text: 'Redirecting...',
          icon: 'success',
          showConfirmButton:true,
          didClose: ()=>{
            window.localStorage.setItem("username",data.usrName);
            window.localStorage.setItem("password",data.password);
            window.localStorage.setItem("type",'hero');
            
            
            this.router.navigate(['/heropage'])
          }});
        }
        ,(error)=>{
          console.log(error);
          alert('error occured!!!');
        }
      )



    }
    else{
      this.adminService.loginAdmin(this.login).subscribe(
        (data : any)=>{
          console.log(data);
          LoginComponent.adminResponse=data;
          console.log(LoginComponent.adminResponse);
          Swal.fire( {title: 'User is Successfully loggedin',
          html: "We are with you",
          text: 'Redirecting...',
          icon: 'success',
          showConfirmButton:true,
          didClose: ()=>{
            window.localStorage.setItem("username",data.usrName);
            window.localStorage.setItem("password",data.password);
            window.localStorage.setItem("type",'admin');
            
            this.router.navigate(['/adminpage'])}
          })
         
        }
        ,(error)=>{
          console.log(error);
          alert('error occured!!!');
        }
      )
    }


  }

}
