import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  category :any;
  data:any;
  
  constructor(private route:ActivatedRoute){
    this.route.paramMap.subscribe(params =>{
      this.category = params.get('id');
      console.log(this.category);
    })
    this.getData().then(data =>{
      this.data = data;
    }).catch(error =>{
      console.error(error);
    })
  }
  ngOnInit(): void {
     
  }
  async getData(){
    const request = await fetch(`http://127.0.0.1:5000/products/${this.category}`);
    if(await request){
      const data = request.json();
      console.log(data);
      return data
    }
  }
  
}
