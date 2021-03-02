import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://ashutoshpradhandotin-env-1.eba-wspum4yy.us-east-2.elasticbeanstalk.com/ashutoshpradhandotin';

  getUsers() {
    return this.http.get(this.rootURL + '/userList');
  }

  addUser(user: any, id: number) {    
    user.userId = id;
    return this.http.post(this.rootURL + '/createUser', user);
  }

}
