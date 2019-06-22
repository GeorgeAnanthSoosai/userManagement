import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faBackward} from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute, Data, Router } from '@angular/router';
import { UserProfile } from '../model/user-profile';
import { UserProfileService } from '../service/user-profile.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  userDetails: UserProfile;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userProfileService: UserProfileService) {
    library.add(fas, faBackward);
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data: Data) => {
        this.userId = data['id'];
        this.userDetails = this.userProfileService.getUserById(this.userId);
      }
    )
  }

  navigateToUserHomeScreen() {
    this.router.navigate(["user-home"])
  }

}
