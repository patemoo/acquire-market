import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ProductImage } from '../../../shared/interfaces/product';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit, OnChanges {

  @Input()
  public images: ProductImage[];

  public selectedImage: ProductImage;

  constructor() { }

  ngOnInit() {
    this.selectedImage = this.images && this.images[0];
  }

  ngOnChanges(change: SimpleChanges): void {
    this.images = change.images.currentValue;
    this.selectedImage = this.images[0];
  }

  public selectImage(image: ProductImage): void {
    this.selectedImage = image;
  }

}
