import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  constructor(private _http:HttpClient, private _route:Router, private _auth:AuthserviceService){}
 
  ngOnInit(): void {}
onSubmit(form:NgForm){
  console.log(form.controls['email'].value)
  const firstName=form.controls['firstname'].value;
  const lastName=form.controls['lastname'].value;
  const email= form.controls['email'].value;
  const password= form.controls['password'].value
if(!form.valid){
  return alert('please fill all the details')
}
this._auth.register(firstName, lastName, email, password).subscribe((res)=>{
  console.log(res)
})
  this._route.navigate(["/home"])
console.log(form)
form.reset()
}
}

