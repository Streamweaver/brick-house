import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private flashMsgService: FlashMessagesService,
              private router: Router) {
  }

  ngOnInit() {}

  afterSignIn(): void {
    this.router.navigate(['/profile']);
    this.flashMsgService.show('You are now logged in.', {cssClass: 'alert-success', timeout: 4000});
  }

  failedSignIn(error: Error): void {
    this.flashMsgService.show(error.message, {cssClass: 'alert-danger', timeout: 4000});
    this.router.navigate(['/login']);
  }

  signInWithGoogle(): void {
    this.authService.googleLogin()
      .then(() => this.afterSignIn())
      .catch((error) => this.failedSignIn(error));
  }

  signInAnonymously() {
    this.authService.anonymousLogin()
      .then(() => this.afterSignIn())
      .catch((error) => this.failedSignIn(error));
  }
}
