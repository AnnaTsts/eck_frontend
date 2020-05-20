import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '@models/user';
import {UserSummary} from "@models/UserSummary";
import {GET_USER_SUMMARY_URL} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})

export class UsersService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }


  getUserSummary() {
    return this.http.get<User>(``);
  }

  getUserSummaryById() {
    return this.http.get<UserSummary>(GET_USER_SUMMARY_URL);
  }
  //
  // updateSummary(user: User) {
  //   return this.http.put<any>(`${EDIT_SUMMARY}`, user);
  // }
  //
  // changePassword(user: User, oldPassword) {
  //   return this.http.put<any>(`${CHANGE_PASSWORD_SUMMARY}`, {user, oldPassword});
  // }
  //
  // getCurrentUser() {
  //   return this.http.get<User>(`${GET_CURRENT_USER}`);
  // }
}
