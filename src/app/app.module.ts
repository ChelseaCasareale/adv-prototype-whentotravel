import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { LandingModule } from './landing/landing.module';
import { SearchFormModule } from './search-form/search-form.module';
import { SharedModule } from './shared/shared.module';
import { SignUpOrInModule } from './shared/sign-up-in.module';
import { SearchResultsModule } from './sample-search/sample-search.module';
import { UserProfileModule } from './user-profile/user-profile.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    LandingModule,
    SearchFormModule,
    SignUpOrInModule,
    SearchResultsModule,
    UserProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
