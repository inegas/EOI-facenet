import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/user-model';
import { SearchService } from 'src/app/services/search.service';
import { Relationship } from 'src/app/entities/relationship-model';
import { RelationshipService } from 'src/app/services/relationship.service';

@Component({
  selector: 'app-friends-view',
  templateUrl: './friends-view.component.html',
  styleUrls: ['./friends-view.component.scss']
})
export class FriendsViewComponent implements OnInit {

  search:string;
  user:User;
  showUser:User;
  allUsers:User[];
  requestFriend:Relationship;
  allRequests:Relationship[];

  constructor(
    private userService:UserService,
    private searchService:SearchService,
    private relationshipService:RelationshipService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getAllUsers();
    this.getRequest();
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
    //Esto funciona pero es cutre
    /* if(this.search === null || this.search === undefined || this.search === "" ){
      this.getAllUsers();
    }else{
       this.allUsers = this.allUsers.filter(
      user => user.name.includes(this.search));
    }  */

    //De esta forma busca contra la API. _like va full de mango
    if (this.search === null || this.search === undefined || this.search.trim().length === 0) {
      this.getAllUsers();
    }else{
        this.searchService.searchUser(this.search.trim()).subscribe(
        (data:User[]) =>{
          this.allUsers = data;
      });
    };
  };

  //Me quedé aquí
  userSelected(event:User){
    /* console.log(event.name); */
    this.showUser = new User();
    this.showUser.id = event.id;
    this.showUser.name = event.name;
    this.showUser.username = event.username;
    this.showUser.birthdate = event.birthdate;
    this.showUser.startdate = event.startdate;
    this.showUser.img = event.img;
  };

  sendRequest(){
    this.requestFriend = new Relationship();
    this.requestFriend.id = null;
    this.requestFriend.usersend = this.user;
    this.requestFriend.userrecived = this.showUser;
    this.requestFriend.state = 0;
    this.requestFriend.date = Date.now();
    this.relationshipService.postRequest(this.requestFriend).subscribe();
  };

  getRequest(){
    this.relationshipService.getRequest().subscribe(
      (data:Relationship[]) =>{
        this.allRequests = data;
        console.log(data);
        
      }
    )
  };

  getStatusUser(friend: User) {
    let status = -1;
    this.allRequests.map( request => {
      if( request.userrecived.id === friend.id) {
        status = request.state;
        return true;
      }
    }
    );
    return status;
  }
}
