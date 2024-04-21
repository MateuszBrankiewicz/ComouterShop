import { Component } from '@angular/core';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginInputComponent,FormsModule,ButtonComponentComponent,RouterOutlet,RouterLink,RouterLinkActive,HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  homePage : any = ""
  constructor (private http: HttpClient,private router: Router) {}
  loginPageObj = {
    email: '',
    password: ''
  }
  login() {
    this.http.post('http://127.0.0.1:5000/api/login', this.loginPageObj).subscribe((res: any) => {
      console.log(res); // Drukuj odpowiedź serwera w celu debugowania
  
      if (res.result === 'Logowanie udane') {
        let obj = {
          name: res.name,
          surname: res.surname,
          email: res.email,
          password: res.password
        };
        alert("Udało się zalogować");
        sessionStorage.setItem('user', JSON.stringify(obj));
        this.router.navigate([this.homePage]);
      } 
    }, (error) => {
     console.log(error);
     const login = document.getElementById("login");
     if (login) {login.innerHTML +=  `<p class = "text-error">${error.error.result}</p>`
      login.classList.add("error")
    }; 
      
      alert(error.error.result);
    });
  }
  toRegisterPage(){
    this.router.navigate(['register-page']);
  }
  
}
