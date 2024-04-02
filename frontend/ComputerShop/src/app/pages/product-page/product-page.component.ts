import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductToCategoryPageComponent } from '../../components/product-to-category-page/product-to-category-page.component';
import { ProductNavbarComponent } from '../../components/product-navbar/product-navbar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [HeaderComponent,ProductToCategoryPageComponent,ProductNavbarComponent,NgFor],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  category :any;
  data:string[]=[];
  characteristik:string = ''
  characteristik1:string =''
  characteristik2: string = ''
  characteristik3: string = '';
  title:string = '';
  constructor(private route:ActivatedRoute){
    this.route.paramMap.subscribe(params =>{
      this.category = params.get('id');
      console.log(this.category);
      this.setAdidtionalAttributes(this.category);
    })
    this.getData().then(data =>{
      console.log(data)
      this.data = data
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
  setAdidtionalAttributes(category: any) {
    switch(category){
      case "cpu":{
        this.title = "Procesory"
        this.characteristik = "Rdzenie";
        this.characteristik1 ="Czestotliwosc";
        this.characteristik2 = "Integra";
        this.characteristik3 = "Socket";
        break;
      }

    }
  }
}


