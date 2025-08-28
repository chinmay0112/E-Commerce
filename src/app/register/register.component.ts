import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from '../shared/header/header.component';
import {
  BreadcrumbItem,
  InnerLayoutComponent,
} from '../shared/inner-layout/inner-layout.component';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    HeaderComponent,
    InnerLayoutComponent,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  breadcrumbs: BreadcrumbItem[] = [];
  items: MenuItem[] = [];
  userName: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  mobile: number | undefined;
  ngOnInit(): void {
    this.breadcrumbs = [{ label: 'Register' }];
  }
}
