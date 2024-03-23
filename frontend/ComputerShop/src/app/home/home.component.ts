import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';
import { ProductNavbarComponent } from '../product-navbar/product-navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SliderComponent,ProductNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides : any[] = [ {
    url: './../assets/img/slider/1.jpg',
    title: 'Slide 1'
  },
  {
    url: './../assets/img/slider/2.avif',
    title: 'Slide 2'
  },
  {
    url: './../assets/img/slider/3.jpg',
    title: 'Slide 3'
  },
  {
    url: './../assets/img/slider/4.jpg',
    title: 'Slide 4'
  }];
}
