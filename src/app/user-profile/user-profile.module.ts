import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppRoutingModule } from '../app-routing.module';

import { UserProfileComponent } from './user-profile.component';
import { UserListComponent } from './user-list.component';
import { MapModeComponent } from './map-mode.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserListComponent,
    MapModeComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdNilINoBUqFe3uHQhPbXidxwPxaxvTTM'
    })
  ],
  exports: [
    UserProfileComponent,
    UserListComponent,
    MapModeComponent
  ]
})

export class UserProfileModule { }
