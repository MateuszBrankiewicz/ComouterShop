import { Component } from '@angular/core';
import { LoginInputComponent } from '../login-input/login-input.component';
import { ButtonComponentComponent } from '../button-component/button-component.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginInputComponent,ButtonComponentComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  login(){
    console.log("Logowanie udane");
  }
}
