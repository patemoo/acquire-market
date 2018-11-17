import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[carouselImage]'
})
export class ImageDirective {

  @HostBinding('class.in-view')
  public inView = false;

  constructor() { }

}
