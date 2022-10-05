import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service: DataService) { }
  paramID!:any;
  tableData:any;

  ngOnInit(): void {
    this.paramID=this.route.snapshot.paramMap.get("id")
    // console.log("9999999999999999", this.route.snapshot.paramMap.get('id'))
    this.service.selectedUser(this.paramID).subscribe((res)=>{
      // console.log("8888888888888", res)
      this.tableData= res;
    })



  }

}


