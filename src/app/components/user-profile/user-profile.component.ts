import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
}
