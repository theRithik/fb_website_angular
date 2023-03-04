import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
ngOnInit(): void {
 
}
send:string="Send Request";
color="primary"

onSend(){
  this.send="request sent"
this.color="info"
}
}
