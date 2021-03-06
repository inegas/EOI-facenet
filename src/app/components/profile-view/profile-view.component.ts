import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user-model';
import { Historie } from 'src/app/entities/historie-model';
import { UserService } from 'src/app/services/user.service';
import { HistoriesService } from 'src/app/services/histories.service';
import { Relationship } from 'src/app/entities/relationship-model';
import { RelationshipService } from 'src/app/services/relationship.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  user:User
  historie:Historie;
  allHistories:Historie[];
  relation:Relationship;
  allRelationships:Relationship[];
  

  constructor(
    private userService:UserService,
    private historieService:HistoriesService,
    private relationship:RelationshipService) { }

  ngOnInit() {
    this.getUser();
    this.getHistories();

    this.historie = new Historie();
    this.historie.id = null;
    this.historie.user =  new User();
    this.historie.date = Date.now();

    this.relation = new Relationship();
    this.relation.id = null;
    this.relation.date = Date.now();

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
