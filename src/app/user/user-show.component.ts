import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Http} from '@angular/http';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'user-show',
  template:`
   <div *ngIf="user" >
    <h3> Id: {{user.id}}</h3>
    <h3> Email: {{user.email}}</h3>
    <h3> Create: {{user.created_at}}</h3>
   </div>
  `
})

export class UserShowComponent implements OnInit{
  id: number;
  routeId: any;
  constructor(
   private http: Http,
   private route: ActivatedRoute,
   private userService: UserService

    ){}
  @Input() user: User;

  ngOnInit(){
    this.routeId = this.route.params.subscribe( params => { this.id = +params['id']} )

    let userRequest = this.route.params.flatMap((params: Params) =>
       this.userService.getUser(+params['id']));
    userRequest.subscribe( response => this.user = response.json() );
  }

}
