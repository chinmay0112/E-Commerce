import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import {
  BreadcrumbItem,
  InnerLayoutComponent,
} from '../shared/inner-layout/inner-layout.component';
import { TabsModule } from 'primeng/tabs';
import { AccordionModule } from 'primeng/accordion';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-shop',
  imports: [
    HeaderComponent,
    InnerLayoutComponent,
    TabsModule,
    AccordionModule,
    CardComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];
  tabs: { title: string; value: number; content: string }[] = [];

  ngOnInit(): void {
    this.breadcrumbs = [{ label: 'Shop' }];
  }
}
