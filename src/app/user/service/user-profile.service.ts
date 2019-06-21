import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfileList: UserProfile[] = [
    new UserProfile('George', ['Pavan', 'Mary', 'Sam', 'Rinkesh'], 31, 140),
    new UserProfile('Pavan', ['Mary', 'Kiran'], 45, 120)
  ];

  userProfileSubject = new BehaviorSubject<UserProfile[]>(this.userProfileList);

  constructor() {}

  addNewUser(user: UserProfile) {
    this.userProfileList.push(user);
    this.userProfileSubject.next(this.userProfileList);
  }
  getUsers(): Observable<UserProfile[]>  {
    return this.userProfileSubject.asObservable();
  }
}
