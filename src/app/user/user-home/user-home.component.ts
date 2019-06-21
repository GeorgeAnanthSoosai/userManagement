import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {fas, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { UserProfileService } from '../service/user-profile.service';
import { UserProfile } from '../model/user-profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  userProfileList: Observable<UserProfile[]>;

  constructor(private modalService: NgbModal, private userProfileServoice: UserProfileService) {
    library.add(fas, faCoffee, faPlusCircle);
   }

  ngOnInit() {
    this.userProfileList = this.userProfileServoice.getUsers();
  }

  createUser(content) {
    this.modalService.open(content, { size: 'lg', backdropClass: 'light-blue-backdrop' })
    .result.then(
      (data) => {
        console.log(data)
        this.userProfileServoice.addNewUser(new UserProfile('George', ['Pavan', 'Mary', 'Sam', 'Rinkesh'], 31, 140));
      },
      (dismiss) => {
        console.log('Test', dismiss);
      }
    );
  }

}
