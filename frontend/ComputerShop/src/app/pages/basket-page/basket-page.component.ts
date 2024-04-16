import { DOCUMENT, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductNavbarComponent } from '../../components/product-navbar/product-navbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-basket-page',
  standalone: true,
  imports: [NgFor,HeaderComponent,ProductNavbarComponent,RouterLink],
  templateUrl: './basket-page.component.html',
  styleUrl: './basket-page.component.css'
})
export class BasketPageComponent {
removeOrder() {
  sessionStorage.removeItem("order")
  window.location.reload();
}
  product:any;
  summedPrice:number = 0;
currentOrder :any[] = [];
  constructor(@Inject(DOCUMENT) private document : Document){
    const sessionStorage = document.defaultView?.sessionStorage;
    if(sessionStorage){
      const orderData = sessionStorage.getItem("order");
      
      if(orderData !== null){
      this.currentOrder = JSON.parse(orderData);
        this.getSummedPrice();
    }}
  }
  getSummedPrice() {
    this.summedPrice = 0;
    let temp :number = 0;
    for (const order of this.currentOrder) {
      this.summedPrice += order.price * order.quantity; 
      
    }
    
  
}
  addSingleProduct(product:any) {
    this.currentOrder.map(item => {
      if (item.name === product.name) {
        item.quantity++;
      }
    })
    this.getSummedPrice();
}
deleteSingleProduct(product:any) {
  this.currentOrder.map(item => {
    if (item.name === product.name) {
      item.quantity--;
    }
  })
  this.getSummedPrice();
}}
