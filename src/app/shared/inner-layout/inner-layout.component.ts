import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api'; // Import MenuItem

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

@Component({
  selector: 'app-inner-layout',
  standalone: true, // Make sure this is true if you're using Angular 17+
  imports: [BreadcrumbModule, CommonModule],
  templateUrl: './inner-layout.component.html',
  styleUrl: './inner-layout.component.scss',
})
export class InnerLayoutComponent implements OnInit {
  @Input() heading: string = '';
  @Input() breadcrumbItems: BreadcrumbItem[] = [];

  items: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  ngOnInit() {}
}
