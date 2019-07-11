import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {fas, faPlusCircle, faMinusCircle, faBackward} from '@fortawesome/free-solid-svg-icons';

import { UserProfileService } from '../service/user-profile.service';
import { UserProfile } from '../model/user-profile';
import { Observable } from 'rxjs';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { AppPlaceholderDirective } from 'src/app/shared/helper/helper.directive';

/**
 * User Home Components
 * Allow to create new user profile and view the data in grid
 * Also it give the visualization using D3
 */
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit, AfterViewInit {
  userProfileList: Observable<UserProfile[]>;
  searchUser: string;
  friendsList: number[] = [];
  @ViewChild(AppPlaceholderDirective, {static: false}) alertHost: AppPlaceholderDirective;
  @ViewChild('createUser', {static: true}) userForm: NgForm;
  /**
   * 
   * @param modalService 
   * @param userProfileServoice 
   * @param router 
   * @param activatedRoute 
   * Initialize services and setup font awesome icons in library
   */
  constructor(private modalService: NgbModal, private userProfileServoice: UserProfileService, 
              private router: Router, private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {
    library.add(fas, faCoffee, faPlusCircle, faMinusCircle, faBackward);
  }

  /**
   * Initialize user data
   */
  ngOnInit() {
    this.userProfileServoice.resetData();
    this.userProfileList = this.userProfileServoice.getUsers();
  }

  ngAfterViewInit() {}

  /**
  * add new friends for dynamic view
  */
  addNewFriends() {
    this.friendsList.push(this.friendsList.length + 1);
  }

  /**
  * remove friends from dynamic view
  */
  removeFriends(index: number) {
    this.friendsList.splice(index, 1);
  }

  /**
   * @param formValue 
   * Get friends in array from dynamically generated form fields
   */
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

  /**
   * @param content 
   * Open user creation form in a modal window
   * Allow to create new user after filling all required field in the form and click create button 
   */
  createUser(content) {
    this.friendsList = [1];
    this.modalService.open(content, { size: 'lg', backdropClass: 'light-blue-backdrop' })
    .result.then(
      (userInput: NgForm) => {
        this.userProfileServoice.addNewUser(new UserProfile(this.userProfileServoice.generateNewId(),
                                            userInput.form.value.userName,
                                            this.getFriends(userInput.form.value),
                                            userInput.form.value.age,
                                            userInput.form.value.weight));
        this.showAlertMessage("User Created Successfully!", "success");
      },
      (dismiss) => {
        //perform cancel action
        this.showAlertMessage("User creation has canceled!", "info")
        
      }
    );
  }

  /**
   * 
   * @param message 
   * @param type 
   * Enhanced to use dynamic alert component to display the error meessage based on the scenarios 
   */
  private showAlertMessage(message: string, type: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const viewContainer = this.alertHost.viewContainerRef;
    viewContainer.clear();
    const componentRef = viewContainer.createComponent(componentFactory);
    componentRef.instance.message = message;
    componentRef.instance.alertType = type;
  }
  /**
   * 
   * @param searchKey 
   * Search user details on every key type 
   */
  findUserDetails(searchKey: string) {
    searchKey = searchKey ? searchKey : "";
    this.userProfileServoice.searchUsers(searchKey.toLowerCase());
  }

  /**
   * 
   * @param userId 
   * navigate to user details screen by it's id
   */
  navigateToUserDetails(userId: number) {
    this.router.navigate(['user-home', userId]);
  }
  
}
