import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[formValidation]'
})
export class FormValidationDirective implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log();
  }

  @HostListener('submit', ['$event'])
  handleBlurEvent() {

    console.log('Foi submetido');
  }

}
