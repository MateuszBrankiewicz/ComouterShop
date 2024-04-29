import {DOCUMENT, NgFor} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {ProductNavbarComponent} from '../../components/product-navbar/product-navbar.component';
import {RouterLink} from '@angular/router';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-basket-page',
  standalone: true,
  imports: [NgFor, HeaderComponent, ProductNavbarComponent, RouterLink, FooterComponent],
  templateUrl: './basket-page.component.html',
  styleUrl: './basket-page.component.css'
})
export class BasketPageComponent {
  removeOrder() {
    sessionStorage.removeItem("order")
    window.location.reload();
  }

  userName: string = '';
  userSession: string = 'noLogged';
  user: any;
  product: any;
  summedPrice: number = 0;
  currentOrder: any[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
    const sessionStorage = document.defaultView?.sessionStorage;
    if (sessionStorage) {
      const orderData = sessionStorage.getItem("order");
      const userData = sessionStorage.getItem("user");
      if (userData !== null) {
        this.user = JSON.parse(userData);
        console.log(this.user.name);
        this.userName = this.user.name;
        this.userSession = 'logged';
      }
      if (orderData !== null) {
        this.currentOrder = JSON.parse(orderData);
        this.getSummedPrice();
      }
    }
  }

  getSummedPrice() {
    this.summedPrice = 0;
    let temp: number = 0;
    for (const order of this.currentOrder) {
      this.summedPrice += order.price * order.quantity;

    }
    this.summedPrice = Math.round((this.summedPrice + Number.EPSILON) * 100) / 100

  }

  addSingleProduct(product: any) {
    this.currentOrder.map(item => {
      if (item.name === product.name) {
        item.quantity++;
      }
    })
    this.getSummedPrice();
    this.saveToSessionStorage();
  }

  deleteSingleProduct(product: any) {
    this.currentOrder.map(item => {
      if (item.name === product.name) {
        item.quantity--;
        if (item.quantity === 0) {
          this.removeSingleProduct(item);
        }
      }
    })
    this.getSummedPrice();
    this.saveToSessionStorage();
  }

  removeSingleProduct(product: any) {
    this.currentOrder.splice(this.currentOrder.indexOf(product), 1);
    this.getSummedPrice();
    this.saveToSessionStorage()
  }

  saveToSessionStorage() {
    const sessionStorage = document.defaultView?.sessionStorage;
    if (sessionStorage) {
      sessionStorage.setItem("order", JSON.stringify(this.currentOrder))
    }
  }

}
