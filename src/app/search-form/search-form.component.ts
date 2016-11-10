import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Search } from '../model/search';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})

export class SearchFormComponent implements OnInit {
  @Input('searchMode') searching: boolean;

  search = new Search('', '', '', 2017);

  searchForm: FormGroup;

  constructor (
          private router: Router,
          private fb: FormBuilder ) {}

  submit() {
    this.search = this.searchForm.value;
    this.router.navigate(['/search-results']);
    this.searching = false;
  }

  buildForm(): void {
    this.searchForm = this.fb.group({
      'travelTo': [this.search.travelTo, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50)
        ]
      ],
      'travelFrom': [this.search.travelFrom, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50)
        ]
      ],
      'month': [this.search.month, Validators.required]
    });

    this.searchForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  ngOnInit() {
    this.buildForm();
  }

  onValueChanged(data?: any) {
    if (!this.searchForm) { return; }

    const form = this.searchForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'travelTo': '',
    'travelFrom': '',
    'month': ''
  };

  validationMessages = {
    'travelTo': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 4 characters long.',
      'maxlength': 'Cannot be more than 50 characters long.'
    },
    'travelFrom': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 4 characters long.',
      'maxlength': 'Cannot be more than 50 characters long.'
    },
    'month': {
      'required': 'Field is required.'
    }
  };

}
