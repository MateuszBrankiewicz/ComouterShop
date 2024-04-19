import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductToCategoryPageComponent } from '../../components/product-to-category-page/product-to-category-page.component';
import { ProductNavbarComponent } from '../../components/product-navbar/product-navbar.component';
import { DOCUMENT, NgFor } from '@angular/common';
import { DataServiceService } from '../../components/data-service.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [HeaderComponent,ProductToCategoryPageComponent,ProductNavbarComponent,NgFor, FooterComponent],
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
  order : any[] = []
  userName:string = '';
  userSession:string = '';
  user:any;
  constructor(private route: ActivatedRoute, private dataService: DataServiceService, @Inject(DOCUMENT) document:Document) { 
    const sessionStorage = document.defaultView?.sessionStorage;
    if(sessionStorage){
      const userData = sessionStorage.getItem("user");
      if(userData !== null){
        this.user = JSON.parse(userData);
        console.log(this.user.name);
        this.userName = this.user.name;
        this.userSession = 'logged';
      }
    }

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('id');
      console.log(this.category);
      this.setAdditionalAttributes(this.category);
      this.fetchData();
    });

    this.dataService.triggerFunction$.subscribe(() => {
      this.fetchData();
    });
  }

  async fetchData() {
    try {
      const request = await fetch(`http://127.0.0.1:5000/products/${this.category}`);
      const data = await request.json();
      console.log(data);
      this.data = data;
    } catch (error) {
      console.error(error);
    }
  }
  addToCart(product: any) {
    let existingProduct = this.order.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 0) + 1;
    } else {
      product.quantity = 1; 
      this.order.push(product);
    }
    console.log(this.order);
    sessionStorage.setItem("order", JSON.stringify(this.order));
    alert('dodano do koszyka')
  }
  setAdditionalAttributes(category: string) {
    switch (category) {
      case "cpu": {
        this.title = "Procesory"
        this.characteristik = "Rdzenie";
        this.characteristik1 = "Czestotliwosc";
        this.characteristik2 = "Integra";
        this.characteristik3 = "Socket";
        break;
      }
      case "gpu": {
        this.title = "Karty graficzne";
        this.characteristik = "Seria"
        this.characteristik1 = "VRAM";
        this.characteristik2 = "Taktowanie";
        this.characteristik3 = "Długość(mm)";
        break;
      }
      case "disks": {
        this.title = "Dyski";
        this.characteristik = "Rozmiar";
        this.characteristik1 = "Typ";
        this.characteristik2 = "Złącze";
        this.characteristik3 = "Standard";
        break;
      }
      case "ram":{
        this.title = "Pamięci ram";
        this.characteristik = "Typ pamięci"
        this.characteristik1 = "Ilość modułów";
        this.characteristik2 = "Kolor";
        this.characteristik3 = "Cena za moduł"
        break;
      }
      case "epu":{
        this.title = "Zasilacze"
        this.characteristik = "Typ"
        this.characteristik1 = "Klasa zasilacza";
        this.characteristik2 = "Moc";
        this.characteristik3 = "Modularny";
        break;
      }
      case "motherboard":{
        this.title = "Płyty główne";
        this.characteristik = "Gniazdo";
        this.characteristik1 = "Rozmiar";
        this.characteristik2 = "Maksymalna ilość pamięci";
        this.characteristik3 = "Ilość slotów ram";
        break;
      }
      case "cooler":{
        this.title = "Chłodzenia";
        this.characteristik = "Hałas";
        this.characteristik1 = "Rozmiar";
        this.characteristik2 = "Kolor";
        this.characteristik3 = "Prędkość"
      }
    }
    
  }
}