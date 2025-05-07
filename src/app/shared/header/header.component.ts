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
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    SelectModule,
    CommonModule,
    MenubarModule,
    AnimateOnScrollModule,
    RouterLink,
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
    { label: 'Login', link: '/' },
    { label: 'Register', link: '' },
    { label: 'Cart', link: '' },
    { label: 'Checkout', link: '' },
    { label: 'Wishlist', link: '' },
  ];

  // Menu items for the currency dropdown
  currencyMenuItems = [
    { label: 'USD', link: '' },
    { label: 'EUR', link: '' },
    { label: 'GBP', link: '' },
    { label: 'JPY', link: '' },
    { label: 'CAD', link: '' },
  ];

  constructor(private renderer: Renderer2) {
    // Add click outside listeners after view init
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
      },
      {
        label: 'Features',
      },
      {
        label: 'Projects',
        items: [
          {
            label: 'Components',
          },
          {
            label: 'Blocks',
          },
          {
            label: 'UI Kit',
          },
          {
            label: 'Templates',
            items: [
              {
                label: 'Apollo',
              },
              {
                label: 'Ultima',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
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
}
