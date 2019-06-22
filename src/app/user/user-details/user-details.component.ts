import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data: Data) => {
        this.userId = data['id'];
        this.userDetails = this.userProfileService.getUserById(this.userId);
      }
    )
  }

}
