import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    emailAddress: new FormControl(''),
    phone: new FormControl(''),
    summary: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  validate(field: AbstractControl): boolean {
    return field.invalid && field.touched;
  }
}


