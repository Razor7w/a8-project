import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(
    private eRef: ElementRef
  ) { }

  @HostListener('mouseover')
  blackBackground () {
    this.eRef.nativeElement.classList.add('blackBackground');
    // console.log('MouseOver | blackBackground');
  }

  @HostListener('mouseout')
  normalBackground() {
    this.eRef.nativeElement.classList.remove('blackBackground');
    // console.log('MouseOut | normalBackground');
  }

}
