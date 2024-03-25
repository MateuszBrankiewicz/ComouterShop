import { Component, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProductNavbarComponent } from '../../components/product-navbar/product-navbar.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SliderComponent,ProductNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  userName : string = '';
  user:any
  slides : any[] = [ 
  {
    url: './../assets/img/slider/2.avif',
    title: 'Slide 2'
  },
  {
    url: './../assets/img/slider/1.jpg',
    title: 'Slide 1'
  },
  {
    url: './../assets/img/slider/3.jpg',
    title: 'Slide 3'
  },
  {
    url: './../assets/img/slider/4.jpg',
    title: 'Slide 4'
  }];
  constructor(@Inject(DOCUMENT) private document:Document){
    const localStorage = document.defaultView?.localStorage;
    if(localStorage){
    const userData = localStorage.getItem('user')
    console.log(userData)
    if(userData !== null){
      this.user = JSON.parse(userData);
      console.log(this.user.name)
      this.userName = this.user.name
    }
  }}
  getFromLocalStorage(){
    
  }
 ngOnInit(): void {
     this.getFromLocalStorage();
 }
}
