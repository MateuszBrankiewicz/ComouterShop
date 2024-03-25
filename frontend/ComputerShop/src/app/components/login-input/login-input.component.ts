import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-input',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginInputComponent),
      multi: true
    }
  ],
  template: `
    <div class="input">
      <input 
        type="{{ type }}" 
        pattern="{{ pattern }}" 
        placeholder="{{ placeholder }}"
        [ngModel]="value"
        (ngModelChange)="onChange($event)"
        (blur)="onTouched()">
      <img class="img" src="{{ pathToImg }}" alt="img"> 
    </div>
  `,
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements ControlValueAccessor {
  @Input() type: string = "";
  @Input() pattern: string = "";
  @Input() placeholder: string = "";
  @Input() pathToImg: string = "../../assets/img/outline_person_white_48dp.png";

  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    // Optionally implement if needed
  }
}
