import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {LoginComponent } from '../../pages/login/login.component';
import { HeroneedyService } from 'src/app/services/heroneedy.service';
import {NeedyService} from '../../services/needy.service';
@Component({
  selector: 'app-needynavbar',
  templateUrl: './needynavbar.component.html',
  styleUrls: ['./needynavbar.component.css']
})
export class NeedynavbarComponent implements OnInit {

  constructor( private router :Router,private needyService:NeedyService) { }
public  needy: any;
public  heroes: any;
  ngOnInit(): void {
    let username = window.localStorage.getItem('username');
    let password = window.localStorage.getItem('password');
    let type = window.localStorage.getItem('type');
    this.needyService.loginNeedy({usrName:username,password:password}).subscribe(
      (data :any )=>{
        this.needy=data;
      }
      ,(error : any)=>{
        this.router.navigate(['/login']);
      }
    )
   
}

  logout()
  {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('type');
    window.localStorage.removeItem('needyId');
    window.localStorage.removeItem('heroId');
  
    Swal.fire( {title: 'User is Successfully logged out',
          html: "See you soon",
          timer: 5000,
          text: 'Redirecting...',
          icon: 'success',
          showConfirmButton:true,
          didClose:()=>{this.router.navigate([''])},
            });

  }
  logout2()
  {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('type');
    window.localStorage.removeItem('needyId');
    window.localStorage.removeItem('heroId');
  
    Swal.fire( {title: 'User is Successfully removed from system ',
          html: "See you soon",
          timer: 5000,
          text: 'Redirecting...',
          icon: 'success',
          showConfirmButton:true,
          didClose:()=>{this.router.navigate([''])},
            });

  }

  menuitem1()
  {
    this.router.navigate(['/needyeditprofile']);
  }
  menuitem2()
  {
  //   this.heroneedyService.catchUpHero(this.needy).subscribe(
  //     (data : any)=>{
  //       console.log(data);
  //       this.heroes=data.heroes;
  //       console.log(this.heroes);
      //  Swal.fire("sucess","user is registered","success",5000);
    //  Swal.fire( {title: 'User is Successfully registered',
    // html: "You are ready to use service of our mighty heroes !! redirecting to login ....",
    // timer: 4000,
    // text: 'Redirecting...',
    // icon: 'success',
    // showConfirmButton:true,
    // didClose: ()=> {this.router.navigate(['/catchuphero'])}
    //   });
    //   }
    
    //   ,(error)=>{
    //     console.log(error);
    //     alert('error occured!!!');
    //   }
    // );
    this.router.navigate(['/catchuphero']);
  }
}



    