import { Component, Inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DOCUMENT, NgFor } from '@angular/common';
import { ButtonComponentComponent } from '../../components/button-component/button-component.component';
import { BasketPageComponent } from '../basket-page/basket-page.component';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [HeaderComponent,ButtonComponentComponent, NgFor],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
  
})
export class OrderPageComponent extends BasketPageComponent {
 
 
}
