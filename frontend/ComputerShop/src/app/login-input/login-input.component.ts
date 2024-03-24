import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-input',
  standalone: true,
  imports: [],
  template: `
    <div class="input">
      <input type="{{ type }}" pattern="{{ pattern }}" placeholder="{{ placeholder }}"> 
      <img class="img" src="{{ pathToImg }}" alt="img"> 
    </div>
  `,
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent {
  @Input() type: string = "";
  @Input() pattern: string = "";
  @Input() placeholder: string = "";
  @Input() pathToImg: string = "../../assets/img/outline_person_white_48dp.png";
}