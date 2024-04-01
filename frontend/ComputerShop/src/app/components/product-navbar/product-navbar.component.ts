import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-navbar.component.html',
  styleUrl: './product-navbar.component.css'
})
export class ProductNavbarComponent {
  constructor(private route:Router){}
  navigate(id:string){
    console.log(id);
    this.route.navigate(['/products',id]);
  }
}
