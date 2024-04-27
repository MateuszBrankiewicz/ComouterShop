import {Component, Inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {DOCUMENT, NgFor, NgIf} from '@angular/common';
import {ButtonComponentComponent} from '../../components/button-component/button-component.component';
import {BasketPageComponent} from '../basket-page/basket-page.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, ButtonComponentComponent, NgFor, NgIf, HttpClientModule],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'

})
export class OrderPageComponent extends BasketPageComponent {
  delivery1: number = 20;
  delivery2: number = 0;
  delivery3: number = 7;
  delivery4: number = 10;
  orderForm: FormGroup;
  isErrorOnResponse: boolean = false;
  errorMessage = '';

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) {
    super(document);
    this.orderForm = this.formBuilder.group({
      delivery: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,20}$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,40}$/)]],
      postalCode: ['', [Validators.required, Validators.pattern(/[0-9]{2}-[0-9]{3}/)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ\s]{2,50}$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/[0-9]{9}/)]],
      email: ['', [Validators.required, Validators.email]],
      payment: ['', Validators.required],
      regulationsAccepted: [false, Validators.requiredTrue],
      opinion: [false]
    });
  };

  submitOrderToSessionStorage() {
    if (this.orderForm.valid) {
      const formData = this.orderForm.value;
      sessionStorage.setItem('formData', JSON.stringify(formData));
      this.http.post('http://localhost:5000/api/send-orders', {
        'formData': formData,
        'order': this.currentOrder
      }).subscribe((res: any) => {
        if (res.result) {
          this.router.navigate(['/complete-order']);
          alert("Zamowienie zlozone pomyslnie");
        }
      }, error => {
        this.isErrorOnResponse = true

      })
    } else {
      this.orderForm.markAllAsTouched();
    }
  }


}
