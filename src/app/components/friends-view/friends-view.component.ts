import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/user-model';

@Component({
  selector: 'app-friends-view',
  templateUrl: './friends-view.component.html',
  styleUrls: ['./friends-view.component.scss']
})
export class FriendsViewComponent implements OnInit {

  search:string;
  user:User;
  allUsers:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUser();
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data:User[]) =>{
        this.allUsers = data;
      }
    );
  };

  getUser(){
    this.userService.getUser().subscribe(
      (data:User) => {
        this.user = data;
      },
      error => console.log(error),
      () => console.log('user load')
    );
  };

  userSearched(){
  const result = this.allUsers.filter(
      user => user.name.includes(this.search));
  console.log(result);
  
  };

}
