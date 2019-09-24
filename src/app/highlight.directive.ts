import { Directive ,ElementRef,HostListener} from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.BackgroundClolor = "green"
  }

}
