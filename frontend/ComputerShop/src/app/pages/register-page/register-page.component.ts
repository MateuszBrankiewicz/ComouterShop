import { Component } from '@angular/core';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import { FormsModule } from '@angular/forms';


import { Router } from '@angular/router';
import { error } from 'console';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [LoginInputComponent,ButtonComponentComponent,FormsModule,HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private http:HttpClient, private router:Router){}
  registerPageObj:any = {
  name:  '',
  surname:  '',
  email: '',
  password: '',
  repeatPassword: '',
  acceptRegulamin: false
  }

  register() {
    localStorage.setItem('registered-user',JSON.stringify(this.registerPageObj))
   this.http.post('http://127.0.0.1:5000/api/register',this.registerPageObj).subscribe((res:any) =>{
    if(res.result){
      alert("Udalo sie zarejestrowac")
     
    }
    else{
      alert(res.message)
    }
   })
  }
  checkboxGetValue(value:string){
      if(value==="on"){
        this.registerPageObj.acceptRegulamin = true;
      }
  }
}
