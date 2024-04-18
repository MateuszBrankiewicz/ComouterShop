import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DOCUMENT, NgFor } from '@angular/common';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import { BasketPageComponent } from '../basket-page/basket-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [HeaderComponent,ButtonComponentComponent, NgFor],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
  
})
export class OrderPageComponent extends BasketPageComponent {
  delivery1:number = 20;
  delivery2:number = 0;
  delivery3:number = 7;
  delivery4:number = 10;
  choosedDelivery:number =0;
  constructor (private router:Router){
    super(document);
   };

  submitOrderToSessionStorage(){
    const form = document.querySelector("form");
    console.log("cos")
    if (form) {
      console.log("jest form")
     
        
       
        // Walidacja formularza
        // if (this.validateForm()) {
          // Pobierz dane z formularza
          const formData = {
            delivery: this.getRadioValue("delivery"),
            firstName: this.getInputValue("input[placeholder='Imię']"),
            lastName: this.getInputValue("input[placeholder='Nazwisko']"),
            postalCode: this.getInputValue("input[placeholder='Kod Pocztowy']"),
            city: this.getInputValue("input[placeholder='Miejscowość']"),
            phoneNumber: this.getInputValue("input[placeholder='Numer telefonu']"),
            email: this.getInputValue("input[placeholder='email']"),
            payment: this.getRadioValue("payment"),
            regulationsAccepted: this.isCheckboxChecked("#regulamin"),
            opinion: this.isCheckboxChecked("#opinia"),
          };
          console.log(formData.delivery);
          console.log(formData.firstName);
          // Zapisz dane do sessionStorage
          sessionStorage.setItem("formData", JSON.stringify(formData));
          console.log("dodane")
          
        }
      //});
      
  else{
    console.log("nie ma formn")
  }}
  
  
  // Funkcja do pobierania wartości z inputa
  getInputValue(selector: string): string {
    const input = document.querySelector(selector) as HTMLInputElement;
    return input.value.trim();
  }
  
  // Funkcja do pobierania wartości z wybranego radio
   getRadioValue(name: string): string {
    const radio = document.querySelector(`input[name='${name}']:checked`) as HTMLInputElement;
    return radio ? radio.value : "";
  }
  
  // Funkcja do sprawdzania czy checkbox jest zaznaczony
  isCheckboxChecked(selector: string): boolean {
    const checkbox = document.querySelector(selector) as HTMLInputElement | null;
    return checkbox ? checkbox.checked : false;
  }
  
  
  // Funkcja do walidacji formularza
  validateForm(): boolean {
    const inputs = document.querySelectorAll("input[required]");
    let isValid = true;
  
    inputs.forEach((input) => {
      if (input instanceof HTMLInputElement && !input.validity.valid) {
        isValid = false;
        input.classList.add("invalid");
        this.displayErrorMessage(input, "Proszę wypełnić to pole.");
      } else {
        input.classList.remove("invalid");
        this.removeErrorMessage(input);
      }
    });
  
    return isValid;
  }
  
  
  // Funkcja do wyświetlania komunikatu o błędzie
   displayErrorMessage(input: HTMLInputElement, message: string): void {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
  
    const parent = input.parentElement;
    parent.appendChild(errorMessage);
  }
  
  // Funkcja do usuwania komunikatu o błędzie
   removeErrorMessage(input: HTMLInputElement): void {
    const parent = input.parentElement;
    const errorMessage = parent.querySelector(".error-message");
    if (errorMessage) {
      parent.removeChild(errorMessage);
    }
  }
  
  
}
