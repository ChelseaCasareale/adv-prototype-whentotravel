import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { badEmailValidator } from '../shared/bad-email.directive';
import { SignUp } from '../model/sign-up';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUp = new SignUp('', '', '', '', '');

  signUpForm: FormGroup;

  constructor (
          private router: Router,
          private fb: FormBuilder ) {}

  submit() {
    this.signUp = this.signUpForm.value;
    this.router.navigate(['/']);
  }

  buildForm(): void {

    this.signUpForm = this.fb.group({
      'email': [this.signUp.email, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
          badEmailValidator(/\S+@\S+/g)
        ]
      ],
      'firstName': [this.signUp.firstName, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      ],
      'lastName': [this.signUp.lastName, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      ],
      'password': [this.signUp.password, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ],
      'confirmPassword': [this.signUp.confirmPassword, [
          Validators.required,
        ]
      ]
    });

    this.signUpForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  ngOnInit() {
    this.buildForm();
  }

  onValueChanged(data?: any) {
    if (!this.signUpForm) { return; }

    const form = this.signUpForm;

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
    'firstName': '',
    'lastName': '',
    'password': '',
    'confirmPassword': ''
  };

  validationMessages = {
    'email': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 4 characters long.',
      'maxlength': 'Cannot be more than 50 characters long.',
      'badEmail': 'Not a proper email address'
    },
    'firstName': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 2 characters long.',
      'maxlength': 'Cannot be more than 20 characters long.'
    },
    'lastName': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 2 characters long.',
      'maxlength': 'Cannot be more than 20 characters long.'
    },
    'password': {
      'required': 'Field is required.',
      'minlength': 'Must be at least 8 characters long.',
      'maxlength': 'Cannot be more than 20 characters long.'
    },
    'confirmPassword': {
      'required': 'Field is required.',
      'validateEqual': 'Your passwords do not match'
    }
  };

}
