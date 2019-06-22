import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentHomeComponent } from './home/assignment-home/assignment-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { FaqComponent } from './user/faq/faq.component';

const routes: Routes = [
  {
    path: '', component: AssignmentHomeComponent
  },
  {
    path: 'user-home', component: UserHomeComponent
  }, 
  {
    path: 'user-details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
