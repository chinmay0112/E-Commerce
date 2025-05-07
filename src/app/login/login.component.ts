import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { InnerLayoutComponent } from '../shared/inner-layout/inner-layout.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    InnerLayoutComponent,
    FloatLabelModule,
    FormsModule,
    ButtonModule,
    RouterLink,
    InputTextModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  userName: string | undefined;
  password: string | undefined;
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [{ label: 'Login' }];
  }
}
