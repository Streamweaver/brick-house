import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {RouterModule, Routes} from '@angular/router';

import {MdToolbarModule, MdButtonModule, MdCardModule, MdMenuModule, MdIconModule, MdProgressSpinnerModule} from '@angular/material';

import 'hammerjs';

// Services
import {AuthService} from './core/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';

// Components
import {AppComponent} from './app.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {NavComponent} from './components/nav/nav.component';
import {HomeComponent} from './components/home/home.component';

// Setup config properties
export const firebaseConfig = environment.firebaseConfig;

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'profile', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserProfileComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdCardModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    FlashMessagesService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
