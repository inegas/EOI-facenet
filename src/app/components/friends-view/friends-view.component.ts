import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/user-model';
import { SearchService } from 'src/app/services/search.service';

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

  constructor(
    private userService:UserService,
    private searchService:SearchService
  ) { }

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
    this.showUser.name = event.name;
    this.showUser.username = event.username;
    this.showUser.birthdate = event.birthdate;
    this.showUser.startdate = event.startdate;
    this.showUser.img = event.img;



  };

}
