import { Component, OnInit } from '@angular/core';
import { Historie } from 'src/app/entities/historie-model';
import { User } from 'src/app/entities/user-model';
import { UserService } from 'src/app/services/user.service';
import { HistoriesService } from 'src/app/services/histories.service';

@Component({
  selector: 'app-my-things',
  templateUrl: './my-things.component.html',
  styleUrls: ['./my-things.component.scss']
})
export class MyThingsComponent implements OnInit {

 user:User
  historie:Historie;
  allHistories:Historie[];
  

  constructor(
    private userService:UserService,
    private historieService:HistoriesService) { }

  ngOnInit() {
    this.getUser();
    this.getHistories();
    this.historie = new Historie();
    this.historie.id = null;
    this.historie.user =  new User();
    this.historie.date = Date.now();
  }

  getUser(){
    this.userService.getUser().subscribe(
      (data:User) => {
        this.user = data;
      },
      error => console.log(error),
      () => console.log('user load')
    );
  };

  getHistories(){
    this.historieService.getHistories().subscribe(
      (data:Historie[]) =>{
        this.allHistories = data;
      }
    );
  };

  postHistorie(historie:Historie){
    this.historie.user.id = this.user.id;
    this.historie.user.username = this.user.username;
    this.historie.user.img = this.user.img;
    this.historieService.postHistorie(historie).subscribe(
      () => this.getHistories()
    );
  };

}
