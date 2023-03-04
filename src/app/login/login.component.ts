import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private _auth:AuthserviceService, private _route:Router){}
  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return ;
    }
    const email = form.controls['email'].value;
    const password = form.controls['password'].value
    this._auth.signIn(email, password).subscribe((val)=>{
       console.log(val)
       this._route.navigate(['home'])
    },
    
  (err)=>{
    return alert("please register first",)

  })
    
    
  }

}
