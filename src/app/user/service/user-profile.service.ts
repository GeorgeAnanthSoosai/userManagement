import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfileList: UserProfile[];

  constructor() { }

  addNewUser(user: UserProfile) {
    this.userProfileList.push(user);
  }
  getUsers(): UserProfile[]  {
    return this.userProfileList;
  }
}
