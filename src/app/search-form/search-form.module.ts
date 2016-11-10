import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { SearchFormComponent } from './search-form.component';

@NgModule({
  declarations: [ SearchFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [ SearchFormComponent ]
})
export class SearchFormModule { }
