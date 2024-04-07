import { Component, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProductNavbarComponent } from '../../components/product-navbar/product-navbar.component';
import { DOCUMENT, NgFor } from '@angular/common';
import { ProductComponentComponent } from '../../components/product-component/product-component.component';
import { ThemeService } from '../../theme.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SliderComponent,ProductComponentComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent   {

  userName : string = '';
  userSession: string = 'noLogged'
  products: string[] = [];
  user:any
  order:any[] = [];
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
  constructor(@Inject(DOCUMENT) private document:Document, private themeService: ThemeService){
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
  
  })
  .catch(error => {
    console.error(error); 
  });
  }
}
toggleTheme() {
  this.themeService.toggleTheme();
}

getTheme() {
  return this.themeService.getCurrentTheme();
}
  async getProductsTooHotShot() {
    const response = await fetch("http://127.0.0.1:5000/");
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); 
    return data; 
}
addToCart(product: any) {
  let existingProduct = this.order.find(item => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 0) + 1;
  } else {
    product.quantity = 1; 
    this.order.push(product);
  }
  console.log(this.order);
  sessionStorage.setItem("order", JSON.stringify(this.order));
  alert('dodano do koszyka')
}
}
