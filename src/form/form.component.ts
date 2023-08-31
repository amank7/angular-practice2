import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormComponent implements OnInit {
  signUpForm: FormGroup;
  forbiddenUserNames = ['Cristiano', 'Ronaldo'];
  constructor() {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      employeeId: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
      }),
    });
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  get Name() {
    return this.signUpForm.get('name');
  }

  get Age() {
    return this.signUpForm.get('age');
  }

  get Email() {
    return this.signUpForm.get('email');
  }

  get EmployeeID() {
    return this.signUpForm.get('employeeId');
  }

  get Street() {
    return this.signUpForm.get('address.street');
  }

  get City() {
    return this.signUpForm.get('address.city');
  }

  get State() {
    return this.signUpForm.get('address.state');
  }

  get Country() {
    return this.signUpForm.get('address.country');
  }

  get Pincode() {
    return this.signUpForm.get('address.pincode');
  }
}
