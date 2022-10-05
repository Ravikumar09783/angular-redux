import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  isClicked:boolean=false;
  toggle:boolean= false;

  constructor( private service: DataService) { }
  selectedUser:any;
  ngOnInit(): void {

  }
  userinfo(){
    // console.log("55555555555")
    // if(!this.service.selectRadio){
    //   alert("Please Select User")
    // }
    // console.log(this.service.selectRadio)
          this.toggle!=this.toggle;

          this.service.selectedUser(this.service.selectRadio).subscribe((res)=>{
          console.log("Selected (Radio Button) User Data", res)
          this.selectedUser = res;
          console.log("0000000000",this.selectedUser.name)

    })
  }

}
