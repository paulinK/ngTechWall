import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color') bg = 'red';

  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.bg   = 'yellow';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg   = 'red';
  }
}
