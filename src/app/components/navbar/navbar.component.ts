import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
usuarios: any[]=[];
public isAdmin: any = null;
public userUid: string = null;
  constructor( public afs: AngularFirestore,public  AuthService: AuthService, private router:Router, public afAuth: AngularFireAuth) { 
 
  }

  ngOnInit(): void {
this. getCurrentUser()
  }





  getCurrentUser(){
    this.AuthService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        //this.AuthService.isUserAdmin(this.userUid).subscribe(userRole =>{
        // this.isAdmin = Object.assign({}, userRole.uid).hasOwnProperty(this.userUid);
     

       // })
        if(this.userUid == 'yjpMgjFJMYNZOD4rFSgka46cQpg1' || this.userUid == 'FZ4DpOSMN9ZkwfOJf2UPObzndn93'){
          this.isAdmin = true;
        }
        else{
          this.isAdmin = false
        }
      }
    })
  }

  SignOut() {
    return this.AuthService.SignOut().then(() => {
      localStorage.removeItem('users');
      this.router.navigate(['sign-in']);
    })
  }

  

}
