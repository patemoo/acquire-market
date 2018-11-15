import { Component, AfterContentInit, ContentChildren, QueryList, OnDestroy } from '@angular/core';

import { ImageDirective } from './image.directive';
import { timeout } from 'q';

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements AfterContentInit, OnDestroy {

  @ContentChildren(ImageDirective)
  public images: QueryList<ImageDirective>;
  
  private active = true;
  private current: number = 0;
  private imagesArray: ImageDirective[];

  constructor() { }

  ngAfterContentInit() {
    this.images.first.inView = true;

    this.imagesArray = this.images.toArray();

    this.play(); 
  }

  private clear(): void {
    this.images.forEach(image => image.inView = false);
  }

  private next(): void {
    if (this.current === this.images.length - 1) {
      this.current = 0;
    } else {
      this.current += 1;
    }
    this.clear();
    this.imagesArray[this.current].inView = true;
  }

  private play(): void {
    setTimeout(() => {
      this.next();
      this.play();
    }, 6000);
  }

  ngOnDestroy(): void {
    this.active = false
  }

}
