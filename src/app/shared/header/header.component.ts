import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { SelectModule } from 'primeng/select';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    SelectModule,
    CommonModule,
    MenubarModule,
    AnimateOnScrollModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('accountDropdown') accountDropdownEl!: ElementRef;
  @ViewChild('currencyDropdown') currencyDropdownEl!: ElementRef;

  isAccountDropdownVisible = false;
  isCurrencyDropdownVisible = false;
  items: MenuItem[] | undefined;

  // Menu items for the account dropdown
  accountMenuItems = [
    { label: 'Login', routerLink: '/login' },
    { label: 'Register', routerLink: '/register' },
    { label: 'Cart', routerLink: '/cart' },
    { label: 'Checkout', routerLink: '/checkout' },
    { label: 'Wishlist', routerLink: '/wishlist' },
  ];

  // Menu items for the currency dropdown
  currencyMenuItems = [
    { label: 'USD', command: () => this.setCurrency('USD') },
    { label: 'EUR', command: () => this.setCurrency('EUR') },
    { label: 'GBP', command: () => this.setCurrency('GBP') },
    { label: 'JPY', command: () => this.setCurrency('JPY') },
    { label: 'CAD', command: () => this.setCurrency('CAD') },
  ];

  constructor(private renderer: Renderer2) {
    // Add click outside listeners after view init
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
      {
        label: 'About',
        routerLink: '/about',
      },
      {
        label: 'Shop',
        items: [
          {
            label: 'Shop with us',
            routerLink: '/shop',
          },
          {
            label: 'Buy Product',
            routerLink: '/product-details',
          },
          {
            label: 'UI Kit',
            routerLink: '/ui-kit',
          },
          {
            label: 'Templates',
            items: [
              {
                label: 'Apollo',
                routerLink: '/templates/apollo',
              },
              {
                label: 'Ultima',
                routerLink: '/templates/ultima',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        routerLink: '/contact',
      },
    ];
  }

  ngAfterViewInit() {
    // Click outside listener to close dropdowns
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        this.accountDropdownEl &&
        !this.accountDropdownEl.nativeElement.contains(e.target)
      ) {
        this.isAccountDropdownVisible = false;
      }
      if (
        this.currencyDropdownEl &&
        !this.currencyDropdownEl.nativeElement.contains(e.target)
      ) {
        this.isCurrencyDropdownVisible = false;
      }
    });
  }

  // Toggle methods for better mobile support
  toggleAccountDropdown() {
    this.isAccountDropdownVisible = !this.isAccountDropdownVisible;
    if (this.isAccountDropdownVisible) {
      this.isCurrencyDropdownVisible = false;
    }
  }

  toggleCurrencyDropdown() {
    this.isCurrencyDropdownVisible = !this.isCurrencyDropdownVisible;
    if (this.isCurrencyDropdownVisible) {
      this.isAccountDropdownVisible = false;
    }
  }

  // Keep the existing methods for desktop hover functionality
  showAccountDropdown() {
    // Only activate on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      this.isAccountDropdownVisible = true;
    }
  }

  hideAccountDropdown() {
    // Only activate on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      this.isAccountDropdownVisible = false;
    }
  }

  showCurrencyDropdown() {
    // Only activate on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      this.isCurrencyDropdownVisible = true;
    }
  }

  hideCurrencyDropdown() {
    // Only activate on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      this.isCurrencyDropdownVisible = false;
    }
  }

  // Handle ESC key to close dropdowns
  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.isAccountDropdownVisible = false;
    this.isCurrencyDropdownVisible = false;
  }

  // Method to handle currency selection
  setCurrency(currency: string) {
    console.log(`Currency changed to ${currency}`);
    // Implement your currency change logic here
    this.isCurrencyDropdownVisible = false;
  }
}
