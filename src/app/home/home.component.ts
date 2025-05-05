import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardComponent } from '../shared/card/card.component';
import { ClientCarouselComponent } from '../client-carousel/client-carousel.component';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CardComponent,
    ClientCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @Input() targetDate: Date = new Date(); // Default to current date

  timeLeft = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  private subscription: Subscription | undefined;
  ngOnInit(): void {
    if (this.targetDate.getTime() <= new Date().getTime()) {
      this.targetDate = new Date();
      this.targetDate.setDate(this.targetDate.getDate() + 7);
    }

    // Update timer every second
    this.subscription = interval(1000).subscribe(() => {
      this.updateTimeLeft();
    });

    // Initial calculation
    this.updateTimeLeft();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateTimeLeft() {
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      // Timer expired
      this.timeLeft = {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      return;
    }

    // Calculate time units
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));

    this.timeLeft = {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
