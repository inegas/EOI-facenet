import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/user-model';
import { Historie } from 'src/app/entities/historie-model';
import { HistoriesService } from 'src/app/services/histories.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user:User
  /* historie:Historie; */

  constructor(
    private userService:UserService,
    private historieService:HistoriesService) { }

  ngOnInit() {
    this.getUser();
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

  postHistorie(historie:Historie){
    this.historieService.postHistorie(historie).subscribe();
  }

}
