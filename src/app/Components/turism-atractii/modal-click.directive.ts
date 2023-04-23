import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appModalClick]'
})
export class ModalClickDirective {

  constructor(private el: ElementRef) { }

}
