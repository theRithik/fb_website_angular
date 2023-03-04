import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './login/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements OnInit {
  // user= new BehaviorSubject<User>(null!)
  user:any

  constructor(private _http:HttpClient) { }
  ngOnInit(): void {
    
  }

  register(firstName:any, lastName:any, email:any, password:any){
    return this._http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACa696pJA-b7zyis_TZ9j2XefS9S9TTPw',{
     firstName:firstName,
       lastName:lastName,
      email:email,
      password:password,
      returnSecureToken:true
    })

    
  }
 signIn(email:any, password:any){
        return this._http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACa696pJA-b7zyis_TZ9j2XefS9S9TTPw',{
          email:email,
          password:password,
          returnSecureToken:true,
        }).pipe(
           tap((res:any)=>{
            this.authentication=res
           })
        )
 }

 authentication(res:any){
const expiringTime= new Date(new Date().getTime()+res.expiresIn*1000)
const loggedIn= new User(res.email,res.Id, res.tokenId, expiringTime)
 
 this.user.next(loggedIn);
 localStorage.setItem('userData', JSON.stringify(loggedIn))
 }
 autoSign(){
  const userData = JSON.parse(localStorage.getItem('userData')!)
if(!userData){
return
}
const loggedIn= new User(userData.email, userData.id, userData._tokenId, userData._exiprationDate)
this.user.next(loggedIn)
 }
}
