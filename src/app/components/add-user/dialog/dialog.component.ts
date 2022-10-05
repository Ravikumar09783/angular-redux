import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  adduser= new FormGroup({
    name: new FormControl(''),
    username:new FormControl(''),
    email:new FormControl(''),
    street:new FormControl(''),
    suit:new FormControl(''),
    city:new FormControl(''),
    phone:new FormControl(''),
    website:new FormControl(''),

  })


  constructor() { }

  ngOnInit(): void {
  }

  AddUser(){
    return console.log(this.adduser.value)
  }

}
