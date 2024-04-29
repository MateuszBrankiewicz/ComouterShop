import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-component',
  standalone: true,
  template: `
    <div class="button">
      <button (click)="onClick()">{{ text }}</button>
    </div>
  `,
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent {
  @Input() text: string = "";
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  onClick() {

    this.buttonClick.emit(this.text);
  }
}
