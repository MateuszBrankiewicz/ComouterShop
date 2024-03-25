import { Component } from '@angular/core';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { stringify } from 'node:querystring';



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
  login(){
    this.http.post('http://127.0.0.1:5000/api/login',this.loginPageObj).subscribe((res:any)=>{
      if(res.result){
        console.log(res);
        let obj = {
          name: res.name,
          surname: res.surname,
          email:res.email,
          password:res.password
        }
        alert("Udalo sie zalogowac")
        localStorage.setItem('user',JSON.stringify(obj));
        this.router.navigate([this.homePage])
      }
      else{
        alert(res.message)
       
      }
    })
  }
}
