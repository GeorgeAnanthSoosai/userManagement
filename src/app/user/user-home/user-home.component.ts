import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {fas, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

import { UserProfileService } from '../service/user-profile.service';
import { UserProfile } from '../model/user-profile';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit, AfterViewInit {
  userProfileList: Observable<UserProfile[]>;
  friendsList: number[] = [];
  constructor(private modalService: NgbModal, private userProfileServoice: UserProfileService, private router: Router, private activatedRoute: ActivatedRoute) {
    library.add(fas, faCoffee, faPlusCircle, faMinusCircle);
   }

  ngOnInit() {
    this.userProfileList = this.userProfileServoice.getUsers();
  }

  ngAfterViewInit() {}

  addNewFriends() {
    this.friendsList.push(this.friendsList.length + 1);
  }
  removeFriends(index: number) {
    this.friendsList.splice(index, 1);
  }

  getFriends(formValue): string[] {
    const keysList = Object.keys(formValue);
    const results: string[] = [];
    for (const key of keysList) {
      if (key.search('friends') > -1) {
        results.push(formValue[key]);
      }
    }
    return results;
  }

  createUser(content) {
    this.friendsList = [1];
    this.modalService.open(content, { size: 'lg', backdropClass: 'light-blue-backdrop' })
    .result.then(
      (userInput: NgForm) => {
        this.userProfileServoice.addNewUser(new UserProfile(userInput.form.value.userName,
                                            this.getFriends(userInput.form.value),
                                            userInput.form.value.age,
                                            userInput.form.value.weight));
      },
      (dismiss) => {
        console.log('Test', dismiss);
      }
    );
  }

  navigateToUserDetails(index: number) {
    this.router.navigate(['user-home', index]);
  }
  
}
