import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { faCheck, faCircle, faEdit, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  plus = faPlus;
  check = faCheck;
  edit = faEdit;
  minus = faMinus;
  circle = faCircle;

  skills = new FormArray([]);
  form = new FormGroup({
    skill: new FormControl('', Validators.required)
  });

  // skillIndex: number = this.form.controls.skills.value.length - 1;
  // currentControl: FormControl = this.form.controls.skills.controls[this.skillIndex];
  constructor() { }

  ngOnInit(): void {
    console.log(this.skills);
    console.log(this.form);
  }

  validate(field: AbstractControl): boolean {
    return field.invalid && field.touched;
  }

  addSkill(): void {
    // console.log(this.skill);
    if (this.form.valid) {
      const input = this.form.value.skill;
      console.log(input);
      this.skills.push(new FormControl(input));
      this.form.controls.skill.reset();
      console.log(this.form);
      // this.currentControl = this.form.controls.skills.controls[this.skillIndex];
    } else {
      this.form.markAllAsTouched();
    }
  }

  setReadonly(input: HTMLInputElement): void {
    console.log(this.skills);
    input.toggleAttribute('readonly');
  }
}
// https://www.tektutorialshub.com/angular/angular-formarray-example-in-reactive-forms/
