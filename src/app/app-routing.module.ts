import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchResultsComponent } from './sample-search/sample-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DoesNotExistComponent } from './shared/404.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: '404', component: DoesNotExistComponent },
      { path: 'login', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'search-results', component: SearchResultsComponent },
      { path: 'user-profile', component: UserProfileComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
