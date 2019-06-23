import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentHomeComponent } from './assignment-home.component';
import { CommonModule } from '@angular/common';
import { UserMaterialModule } from 'src/app/core-module/user-material/user-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserBootstrapModule } from 'src/app/core-module/user-bootstrap/user-bootstrap.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserHomeComponent } from 'src/app/user/user-home/user-home.component';
import { UserDetailsComponent } from 'src/app/user/user-details/user-details.component';
import { FaqComponent } from 'src/app/user/faq/faq.component';
import { FriendsFilterPipe } from 'src/app/user/pipes/friends-filter.pipe';
import { UserProfileChartComponent } from 'src/app/user/user-profile-chart/user-profile-chart.component';
import { AgeClasificationPipe } from 'src/app/user/pipes/age-clasification.pipe';

describe('AssignmentHomeComponent', () => {
  let component: AssignmentHomeComponent;
  let fixture: ComponentFixture<AssignmentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        CommonModule,
        UserMaterialModule,
        BrowserModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        UserBootstrapModule,
        FormsModule,
        AppRoutingModule
      ],
      declarations: [ AssignmentHomeComponent, UserHomeComponent, UserDetailsComponent, FaqComponent, FriendsFilterPipe, UserProfileChartComponent, AgeClasificationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
