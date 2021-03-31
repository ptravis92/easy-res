import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  form = new FormGroup({
    skills: new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
  }

  validate(field: AbstractControl): boolean {
    return field.invalid && field.touched;
  }

}
// https://www.tektutorialshub.com/angular/angular-formarray-example-in-reactive-forms/
