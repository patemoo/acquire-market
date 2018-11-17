import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCarouselComponent } from './image-carousel.component';
import { ImageDirective } from './image.directive';


@NgModule({
  declarations: [
    ImageCarouselComponent,
    ImageDirective,
  ],
  exports: [
    ImageCarouselComponent,
    ImageDirective,
  ],
  imports: [
    CommonModule,
  ],
})
export class ImageCarouselModule {}