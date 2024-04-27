import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-users-orders',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './users-orders.component.html',
  styleUrl: './users-orders.component.css'
})

export class UsersOrdersComponent {
  orders: any[] = [];
  loggedUser = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }
  errorMessage = '';

  constructor(@Inject(DOCUMENT) document: Document, private http: HttpClient) {
    const sessionStorage = document.defaultView?.sessionStorage;
    if (sessionStorage) {
      const user = sessionStorage.getItem("user");
      if (user) {
        this.loggedUser = JSON.parse(user);
        console.log(this.loggedUser);
      }
    }
  }

  getOrder() {
    this.http.post('http://localhost:5000/api/orders', this.loggedUser).subscribe((res: any) => {
      if (res.result) {
        this.orders = JSON.parse(res.ordersData);
        console.log(this.orders)
      }
    }, error => {
      console.error("Wystapil blad")

    })
  }
}
