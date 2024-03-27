import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-component',
  standalone: true,
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  @Input() product: any;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  onButtonClick() {
    this.addToCart.emit(this.product);
   
  }
}
