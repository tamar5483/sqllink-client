import { Component, OnInit } from '@angular/core';
import { user } from 'lessons/app/user.model';
import { UserssService } from '../users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserssService) { }

  ngOnInit(): void {
   
  }
  
  validUsers:user[]|undefined;
  notValidUser:user[]|undefined;
  
getUsers(excelFile:any){
  this.userService.getUsers(excelFile).subscribe(u=>console.log(u))
}

   

}
