import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import { DialogComponent } from './dialog/dialog.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
  }

  print(){
    console.log("hello world")
  }

}
// @Component({
//   selector: 'app-dialog',
//   templateUrl: './dialog/dialog.component.html',
// })
// export class AppDialog {}
