import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-client-carousel',
  imports: [CarouselModule],
  templateUrl: './client-carousel.component.html',
  styleUrl: './client-carousel.component.scss',
})
export class ClientCarouselComponent implements OnInit {
  products: any = [];
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
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
    this.products = [
      {
        id: '1',
        name: 'Elizabeth Ayna',
        designation: 'CEO of Woman Federation',
        image: 'client-img.png',
      },
      {
        id: '2',
        name: 'Elara Thornwood',
        designation: 'Sr. Software Developer',
        image: 'client-img.png',
      },
    ];
  }
}
