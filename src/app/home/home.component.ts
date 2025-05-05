import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductCategoryComponent } from "../product-category/product-category.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CarouselComponent, ProductCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
