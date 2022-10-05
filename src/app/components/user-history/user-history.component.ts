import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {
  selectedUser:any;

  constructor(private service:DataService) { }

  ngOnInit(): void {

    this.service.selectedUser(this.service.selectRadio).subscribe((res)=>{
      console.log("Selected (Radio Button) User Data", res)
      this.selectedUser = res;
      console.log("0000000000",this.selectedUser)

})



  }

  userinf(){
    // console.log("55555555555")
    // if(!this.service.selectRadio){
    //   alert("Please Select User")
    // }
    console.log("RRRRRRRRRRRRRR",this.service.selectRadio)


  }

}
