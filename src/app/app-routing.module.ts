import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHistoriesComponent } from './components/my-histories/my-histories.component';
import { MyThingsComponent } from './components/my-things/my-things.component';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';
import { EventsComponent } from './components/events/events.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';

const routes: Routes = [
  {path: '', redirectTo: 'myHistories', pathMatch: 'full'},
  {path: 'myHistories', component: MyHistoriesComponent},
  {path: 'myThings', component: MyThingsComponent},
  {path: 'myFriends', component: MyFriendsComponent},
  {path: 'Events', component: EventsComponent},
  {path: '**', component: Notfound404Component}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
