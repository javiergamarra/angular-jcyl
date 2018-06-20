import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[NIF]'
})
export class NifDirective {

  constructor(
    private el: ElementRef) {
  }

  @HostBinding('style.background') background;

  @HostListener('keyup') onKeyUp() {
    this.background = this.el.nativeElement.value === '0' ? 'red' : '';
  }

}
