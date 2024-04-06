import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-product-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-navbar.component.html',
  styleUrl: './product-navbar.component.css'
})
export class ProductNavbarComponent {
  constructor(private route:Router, private dataService:DataServiceService){}
  navigate(id:string){
    console.log(id);
    this.route.navigate(['/products',id]);
    this.dataService.executeFunction();
  }
}
