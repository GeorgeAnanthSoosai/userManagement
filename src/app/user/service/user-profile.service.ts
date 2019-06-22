import { Injectable } from '@angular/core';
import { UserProfile } from '../model/user-profile';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfileList: UserProfile[] = [
    new UserProfile('George', ['Pavan', 'Mary', 'Sam', 'Rinkesh'], 30, 140),
    new UserProfile('Pavan', ['Mary', 'Kiran'], 40, 80),
    new UserProfile('Devi', ['Greesh', 'Shiva'], 25, 60),
    new UserProfile('Greesh', ['Devi', 'Greesh'], 35, 70),
    new UserProfile('John', ['Alex', 'Sam'], 50, 50),
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
  getUserById(id: number): UserProfile {
    return this.userProfileList[id];
  }

  searchUsers(searchKey: string) {
    let copyUserProfileList: UserProfile[] = [...this.userProfileList];
    let results: UserProfile[] = copyUserProfileList.filter((item: UserProfile) => {
      if(item.name.toLowerCase().indexOf(searchKey) > -1) {
        return true;
      } else if(item.age.toString().indexOf(searchKey) > -1) {
        return true;
      } else if(item.weight.toString().indexOf(searchKey) > -1) {
        return true;
      } else {
        for(let i = 0; i < item.friends.length; i++) {
          if(item.friends[i].toLowerCase().indexOf(searchKey) > -1) {
            return true;
          }
        }
        return false;
      }
      return false;
    })
    this.userProfileSubject.next(results);
  }

}
