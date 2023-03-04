import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 userId=1;
  // server=[
  //   {
  //     id:1,
  //     firstname:"rithik",
  //     lastname:'kuvvarapu',
  //     email:"rithik@gmail.com",
  //     image:"https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
  //     post:"https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
  //     dob:"18/09/2001",
  //     connections:"20",
  //     posts:"1"

  //   },
  //   {
  //     id:1,
  //     firstname:"rithik",
  //     lastname:'kuvvarapu',
  //     email:"rithik@gmail.com",
  //     image:"https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
  //     post:"https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
  //     dob:"18/09/2001",
  //     connections:"20",
  //     posts:"1"

  //   },
  //   {
  //     id:1,
  //     firstname:"rithik",
  //     lastname:'kuvvarapu',
  //     email:"rithik@gmail.com",
  //     image:"https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
  //     post:"https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
  //     dob:"18/09/2001",
  //     connections:"20",
  //     posts:"1"

  //   },
  // ]
  constructor(private _http:HttpClient, private _active:ActivatedRoute){}
  ngOnInit(): void {
     const userId = this._active.snapshot.queryParamMap.get('id')
    this._http.get("http://3.17.216.66:3000/users/"+this.userId)
  }
  onPost(){}

}
