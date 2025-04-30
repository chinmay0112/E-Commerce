import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-header',
  imports: [SelectModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAccountDropdownVisible = false;
  isCurrencyDropdownVisible = false;

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

  // Methods to show/hide account dropdown
  showAccountDropdown() {
    this.isAccountDropdownVisible = true;
  }

  hideAccountDropdown() {
    this.isAccountDropdownVisible = false;
  }

  // Methods to show/hide currency dropdown
  showCurrencyDropdown() {
    this.isCurrencyDropdownVisible = true;
  }

  hideCurrencyDropdown() {
    this.isCurrencyDropdownVisible = false;
  }
}
