import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable' ;
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService{
  private userUrl= "http://localhost:3000/api/v1/index/index_user";

  constructor(private http: Http){}

   getUsers(): Observable<User[]>{
     return this.http.get(this.userUrl)
       .map((response: Response) => <User[]>response.json() )


  }

  getUser(id: number){
    return this.http.get("http://localhost:3000/api/v1/detail/"+id);
  }

}

