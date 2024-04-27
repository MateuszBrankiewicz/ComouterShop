import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [LoginInputComponent, ButtonComponentComponent, ReactiveFormsModule, NgIf,HttpClientModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent  {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2),Validators.pattern("^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,20}$")]],
      surname: ['', [Validators.required, Validators.minLength(2),Validators.pattern("^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,40}$")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
      acceptRegulamin: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }



  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('repeatPassword')?.value ? null : { 'mismatch': true };
  }

  register() {
    if (this.registerForm.valid) {
      this.http.post('http://127.0.0.1:5000/api/register', this.registerForm.value).subscribe({
        next: (res: any) => {
          if (res.result) {
            alert("Udało się zarejestrować.");
            this.router.navigate(['login-page']);
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          alert("Error: " + err.message);
        }
      });
    } else {
      alert("Form is not valid");
      this.registerForm.markAllAsTouched();
    }
  }
  get name(){
    return this.registerForm.get('name')
  }
  get surname(){
    return this.registerForm.get('surname')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }

}
