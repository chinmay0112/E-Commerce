import { Component, model, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import {
  BreadcrumbItem,
  InnerLayoutComponent,
} from '../shared/inner-layout/inner-layout.component';
import { GalleriaModule } from 'primeng/galleria';
import { TabsModule } from 'primeng/tabs';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-product-details',
  imports: [
    HeaderComponent,
    InnerLayoutComponent,
    GalleriaModule,
    TabsModule,
    AccordionModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];
  images = model<any>([]);

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  ngOnInit(): void {
    this.breadcrumbs = [{ label: 'Buy Product' }];
    this.images.set([
      {
        previewImageSrc: 'assets/images/product-1.jpg',
        thumbnailImageSrc: 'assets/images/product-1.jpg',
        alt: 'Product Image 1',
        title: 'Product Image 1',
      },
      {
        previewImageSrc: 'assets/images/product-2.jpg',
        thumbnailImageSrc: 'assets/images/product-2.jpg',
        alt: 'Product Image 2',
        title: 'Product Image 2',
      },
      {
        previewImageSrc: 'assets/images/product-3.jpg',
        thumbnailImageSrc: 'assets/images/product-3.jpg',
        alt: 'Product Image 3',
        title: 'Product Image 3',
      },
      {
        previewImageSrc: 'assets/images/product-4.jpg',
        thumbnailImageSrc: 'assets/images/product-4.jpg',
        alt: 'Product Image 4',
        title: 'Product Image 4',
      },
      {
        previewImageSrc: 'assets/images/product-5.jpg',
        thumbnailImageSrc: 'assets/images/product-5.jpg',
        alt: 'Product Image 5',
        title: 'Product Image 5',
      },
    ]);
  }
  quantity = model(1);

  increase() {
    this.quantity.set(this.quantity() + 1);
  }

  decrease() {
    if (this.quantity() > 1) {
      this.quantity.set(this.quantity() - 1);
    }
  }
}
