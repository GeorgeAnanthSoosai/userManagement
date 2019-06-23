import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faBackward} from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute, Data, Router } from '@angular/router';
import { UserProfile } from '../model/user-profile';
import { UserProfileService } from '../service/user-profile.service';

/**
 * Display the user detail
 * It pulls the selected user data and display it on the view
 * After the detail is been viewed, allow user to move back to user home component
 */
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  userDetails: UserProfile;

  /**
   * 
   * @param activatedRoute 
   * @param router 
   * @param userProfileService 
   * Initialize services and setup font awesome icons in library
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userProfileService: UserProfileService) {
    library.add(fas, faBackward);
  }

  /**
   * get the user Id from route params and then pull the detail entries from the service 
   */
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data: Data) => {
        this.userId = data['id'];
        this.userDetails = this.userProfileService.getUserById(this.userId);
      }
    )
  }

  /**
   * Reset grid details darta view
   * Redirect back to user home component 
   */
  navigateToUserHomeScreen() {
    this.userProfileService.resetData();
    this.router.navigate(["user-home"])
  }

}
