import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMaterialModule } from './core-module/user-material/user-material.module';
import { UserBootstrapModule } from './core-module/user-bootstrap/user-bootstrap.module';
import { AssignmentHomeComponent } from './home/assignment-home/assignment-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserProfileChartComponent } from './user/user-profile-chart/user-profile-chart.component';
import { FaqComponent } from './user/faq/faq.component';
import { AgeClasificationPipe } from './user/pipes/age-clasification.pipe';
import { FriendsFilterPipe } from './user/pipes/friends-filter.pipe';
import { AlertComponent } from './shared/alert/alert.component';
import { AppPlaceholderDirective } from './shared/helper/helper.directive';

/**
 * Application module 
 */
@NgModule({
  declarations: [
    AppComponent,
    AssignmentHomeComponent,
    UserHomeComponent,
    UserDetailsComponent,
    UserProfileChartComponent,
    FaqComponent,
    AgeClasificationPipe,
    FriendsFilterPipe,
    AlertComponent,
    AppPlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserMaterialModule,
    UserBootstrapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
