import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Router
import { AppRoutingModule, routing } from './app-routing.module';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { MyHistoriesComponent } from './components/my-histories/my-histories.component';
import { MyThingsComponent } from './components/my-things/my-things.component';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserViewComponent,
    MyHistoriesComponent,
    MyThingsComponent,
    MyFriendsComponent,
    EventsComponent,
    FooterComponent,
    Notfound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
