import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';

import { SearchResultsComponent } from './sample-search.component';
import { ListModeComponent } from './list-mode.component';
import { CalendarModeComponent } from './calendar-mode.component';

import { TemperatureUnitsPipe, LengthUnitsPipe } from './units.pipe.ts';

@NgModule({
  declarations: [
    SearchResultsComponent,
    ListModeComponent,
    CalendarModeComponent,
    TemperatureUnitsPipe,
    LengthUnitsPipe
  ],
  imports: [
    CommonModule,
    HttpModule,
    AppRoutingModule,
  ],
  exports: [
    SearchResultsComponent,
    ListModeComponent,
    CalendarModeComponent,
    TemperatureUnitsPipe,
    LengthUnitsPipe
  ]
})

export class SearchResultsModule { }
