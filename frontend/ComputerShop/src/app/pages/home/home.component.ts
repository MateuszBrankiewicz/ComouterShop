import { Component, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProductNavbarComponent } from '../../components/product-navbar/product-navbar.component';
import { DOCUMENT, NgFor } from '@angular/common';
import { ProductComponentComponent } from '../../components/product-component/product-component.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SliderComponent,ProductNavbarComponent,ProductComponentComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent   {
addToCart(product:any) {
  console.log("Zamowienie:" , product);
}
  userName : string = '';
  userSession: string = 'noLogged'
  products: string[] = [];
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
    const sessionStorage = document.defaultView?.sessionStorage;
    if(sessionStorage){
    const userData = sessionStorage.getItem('user')
    console.log(userData)
    if(userData !== null){
      this.user = JSON.parse(userData);
      console.log(this.user.name);
      this.userName = this.user.name;
      this.userSession = 'logged';
    }
    this.getProductsTooHotShot()
  .then(products => {
    this.products = products;
    console.log(products[0].imgurl);
  })
  .catch(error => {
    console.error(error); 
  });
  }}

  async getProductsTooHotShot() {
    const response = await fetch("http://127.0.0.1:5000/");
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); 
    return data; 
}
addToBasket(){
  sessionStorage.setItem('order',JSON.stringify( this.products))
}
}
