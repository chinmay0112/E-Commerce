import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BannerCarouselComponent } from '../banner-carousel/banner-carousel.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, BannerCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
