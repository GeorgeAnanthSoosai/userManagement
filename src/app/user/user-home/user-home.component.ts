import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {fas, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { UserProfileService } from '../service/user-profile.service';
import { UserProfile } from '../model/user-profile';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit, AfterViewInit {
  userProfileList: Observable<UserProfile[]>;

  constructor(private modalService: NgbModal, private userProfileServoice: UserProfileService) {
    library.add(fas, faCoffee, faPlusCircle);
   }

  ngOnInit() {
    this.userProfileList = this.userProfileServoice.getUsers();
  }

  ngAfterViewInit() {
    
  }

  createUser(content) {
    this.modalService.open(content, { size: 'lg', backdropClass: 'light-blue-backdrop' })
    .result.then(
      (userInput: NgForm) => {
        this.userProfileServoice.addNewUser(new UserProfile(userInput.form.value.userName,
                                            [userInput.form.value.friends],
                                            userInput.form.value.age,
                                            userInput.form.value.weight));
      },
      (dismiss) => {
        console.log('Test', dismiss);
      }
    );
  }

}
