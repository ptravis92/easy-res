import { Component, ElementRef, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-res-form',
  templateUrl: './res-form.component.html',
  styleUrls: ['./res-form.component.css']
})
export class ResFormComponent implements OnInit {
  private stepper!: Stepper;
  currentStep!: number;

  constructor(private elementRef: ElementRef) { }
//https://stackblitz.com/edit/bs-stepper-angular-lazyload?file=src%2Fapp%2Fapp.component.ts
  ngOnInit(): void {
    const stepperEl = this.elementRef.nativeElement.querySelector('#stepper1');

    stepperEl.addEventListener('show.bs-stepper', (event: { detail: { to: number; }; }) => {
      this.currentStep = event.detail.to;
    });

    this.stepper = new Stepper(stepperEl, {
      linear: false,
      animation: true
    });
  }

}
