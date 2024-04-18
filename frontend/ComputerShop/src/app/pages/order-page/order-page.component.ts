import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import { BasketPageComponent } from '../basket-page/basket-page.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [ReactiveFormsModule,HeaderComponent,ButtonComponentComponent, NgFor, NgIf],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
  
})
export class OrderPageComponent extends BasketPageComponent {
  delivery1:number = 20;
  delivery2:number = 0;
  delivery3:number = 7;
  delivery4:number = 10;
  choosedDelivery:number =0;
  orderForm: FormGroup;
  constructor (private router:Router,private formBuilder: FormBuilder){
    super(document);
    this.orderForm = this.formBuilder.group({
      delivery: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      payment: ['', Validators.required],
      regulationsAccepted: [false, Validators.requiredTrue],
      opinion: [false]
    });
   };
   submitOrderToSessionStorage() {
    if (this.orderForm.valid) {
      // Zapisz dane do sessionStorage
      const formData = this.orderForm.value;
      sessionStorage.setItem('formData', JSON.stringify(formData));
    } else {
      // Formularz jest niepoprawny, wyświetl błędy
      this.orderForm.markAllAsTouched(); // Oznacz wszystkie pola jako "dotknięte", aby wyświetlić błędy
    }
  }
  
  
}
