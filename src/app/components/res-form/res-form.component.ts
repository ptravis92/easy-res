import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBriefcase, faFileAlt, faGraduationCap, faInfo, faTools } from '@fortawesome/free-solid-svg-icons';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-res-form',
  templateUrl: './res-form.component.html',
  styleUrls: ['./res-form.component.css']
})
export class ResFormComponent implements OnInit {
  name = 'Stepper';
  private stepper: Stepper;
  education = faGraduationCap;
  info = faInfo;
  skills = faTools;
  jobs = faBriefcase;
  preview = faFileAlt;


  next(): void {
    this.stepper.next();
  }

  onSubmit(): boolean {
    return false;
  }

  ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
  }

}
