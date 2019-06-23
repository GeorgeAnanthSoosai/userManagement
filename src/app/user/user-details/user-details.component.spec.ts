import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { UserMaterialModule } from 'src/app/core-module/user-material/user-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserBootstrapModule } from 'src/app/core-module/user-bootstrap/user-bootstrap.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AssignmentHomeComponent } from 'src/app/home/assignment-home/assignment-home.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { FaqComponent } from '../faq/faq.component';
import { FriendsFilterPipe } from '../pipes/friends-filter.pipe';
import { AgeClasificationPipe } from '../pipes/age-clasification.pipe';
import { UserProfileChartComponent } from '../user-profile-chart/user-profile-chart.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        UserMaterialModule,
        BrowserModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        UserBootstrapModule,
        FormsModule,
        AppRoutingModule
      ],
      declarations: [ UserDetailsComponent, 
        AssignmentHomeComponent, 
        UserHomeComponent, 
        FaqComponent, 
        FriendsFilterPipe, 
        UserProfileChartComponent,
        AgeClasificationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(UserDetailsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
