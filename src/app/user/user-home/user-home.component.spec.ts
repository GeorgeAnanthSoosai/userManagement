import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeComponent } from './user-home.component';
import { UserMaterialModule } from 'src/app/core-module/user-material/user-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserBootstrapModule } from 'src/app/core-module/user-bootstrap/user-bootstrap.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FriendsFilterPipe } from '../pipes/friends-filter.pipe';
import { UserProfileChartComponent } from '../user-profile-chart/user-profile-chart.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AssignmentHomeComponent } from 'src/app/home/assignment-home/assignment-home.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FaqComponent } from '../faq/faq.component';
import { AgeClasificationPipe } from '../pipes/age-clasification.pipe';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

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
      declarations: [ UserHomeComponent, FriendsFilterPipe, UserProfileChartComponent, AssignmentHomeComponent, UserDetailsComponent, FaqComponent, AgeClasificationPipe
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
