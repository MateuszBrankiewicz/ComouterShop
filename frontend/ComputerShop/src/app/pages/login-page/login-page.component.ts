import { Component } from '@angular/core';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginInputComponent,ButtonComponentComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  login(){
    console.log("Logowanie udane");
  }
}
