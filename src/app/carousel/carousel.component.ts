import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, TagModule, CommonModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  products: any[] = [];

  isClientNeeded = false;
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.initProducts();
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  initProducts() {
    this.products = [
      {
        id: '1',
        name: 'Image 1',
        image: 'img-1.jpg',
        title: 'Summer Collection',
        description:
          'Discover our new seasonal items, which is one of the best offers of all time',
        link: 'summer-collection',
      },
      {
        id: '2',
        name: 'Image 2',
        image: 'img-2.jpg',
        title: 'Special Offers',
        description: 'Limited time deals on selected items',
        link: 'special-offers',
      },
      {
        id: '3',
        name: 'Image 3',
        image: 'bg-img-1.jpg',
        title: 'New Arrivals',
        description: 'Check out our latest products',
        link: 'new-arrivals',
      },
    ];
  }
}
