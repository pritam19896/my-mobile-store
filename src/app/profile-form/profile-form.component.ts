import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../helpers/validator-functions';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  // name = new FormControl();
  /* profileForm = new FormGroup({
    // name: new FormControl('Pranit'),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl('')
    })
  }); */

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/^bob/i)]],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: [''],
      city: [''],
      zip: ['']
    }),
    mobiles: this.fb.array([
      this.fb.control('')
    ])
  });

  get name() {
    return this.profileForm.get('name') as FormControl;
  }

  get mobiles() {
    return this.profileForm.get('mobiles') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addMobile() {
    this.mobiles.push(this.fb.control(''));
  }

  ngOnInit(): void {
    /* this.name.valueChanges.subscribe(value => {
      console.log('value -> ', value);
    }); */
  }

  /* updateValue() {
    this.name.setValue('Pranit');
  } */

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
