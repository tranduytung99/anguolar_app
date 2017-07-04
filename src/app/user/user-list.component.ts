import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { Router } from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private router: Router) {
   // this.getUsers();
  }

  ngOnInit() {
   let timer = Observable.timer(0, 5000);
   timer.subscribe( () => this.getUsers() );
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  gotoshow(user: User): void{
    let userLink = ['/user',user.id];
    this.router.navigate(userLink);
  }

}
