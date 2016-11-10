import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { DoesNotExistComponent } from './404.component';

@NgModule({
  declarations: [ DoesNotExistComponent ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ DoesNotExistComponent ]
})

export class SharedModule { }
