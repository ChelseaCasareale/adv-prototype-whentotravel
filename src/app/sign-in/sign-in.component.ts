import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { badEmailValidator } from '../shared/bad-email.directive';
import { Login } from '../model/login';

@Component({
  selector: 'login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  login = new Login('', '');

  loginForm: FormGroup;

  constructor (
          private router: Router,
          private fb: FormBuilder ) {}

  submit() {
    this.login = this.loginForm.value;
    this.router.navigate(['/']);
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      'email': [this.login.email, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
          badEmailValidator(/\S+@\S+/g)
        ]
      ],
      'password': [this.login.password, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ]
    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  ngOnInit() {
    this.buildForm();
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }

    const form = this.loginForm;

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
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 4 characters long.',
      'maxlength': 'Cannot be more than 50 characters long.',
      'badEmail': 'Not a proper email address'
    },
    'password': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 8 characters long.',
      'maxlength': 'Cannot be more than 20 characters long.'
    }
  };

}
