import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product-to-category-page',
  standalone: true,
  imports: [],
  templateUrl: './product-to-category-page.component.html',
  styleUrl: './product-to-category-page.component.css'
})
export class ProductToCategoryPageComponent {
  
  @Input() product:any ;
  @Input() characteristik = '';
  @Input() characteristik1 = '';
  @Input() characteristik2 = '';
  @Input() characteristik3 = '';
}
