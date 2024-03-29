import { DOCUMENT, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductNavbarComponent } from '../../components/product-navbar/product-navbar.component';

@Component({
  selector: 'app-basket-page',
  standalone: true,
  imports: [NgFor,HeaderComponent,ProductNavbarComponent],
  templateUrl: './basket-page.component.html',
  styleUrl: './basket-page.component.css'
})
export class BasketPageComponent {
  product:any;
currentOrder :any[] = [];
  constructor(@Inject(DOCUMENT) private document : Document){
    const sessionStorage = document.defaultView?.sessionStorage;
    if(sessionStorage){
      const orderData = sessionStorage.getItem("order");
      
      if(orderData !== null){
      this.currentOrder = JSON.parse(orderData);
        console.log(this.currentOrder);
    }}
  }
}
