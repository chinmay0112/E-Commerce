import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-category',
  imports: [CommonModule, TagModule, ButtonModule,Carousel],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss'
})
export class ProductCategoryComponent {
  products: any[] =[];

  responsiveOptions: any[] | undefined;

  

  ngOnInit() {
    this.products = [
        {
          id: '1',
          name: 'Pure Honey',
  
          image: 'assets/images/category-1.jpg',
        },
        {
          id: '2',
          name: 'Mustard Oil',
  
          image: 'assets/images/category-2.jpg',
        },
        {
          id: '3',
          name: 'Olive Oil',
  
          image: 'assets/images/category-3.jpg',
        },
      ];

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
}
