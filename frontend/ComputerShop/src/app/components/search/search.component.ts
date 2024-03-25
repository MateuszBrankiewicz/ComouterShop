import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  template: `
    <div class="search">
  
    <input type="text" #search (keyup)="getValue(search.value)" name="search" id="search-input"> <img src="../../assets/img/search.png" alt="search">
  
  </div>
  `,
  styleUrl: './search.component.css'
})
export class SearchComponent {
  a:string = "";
   getValue(searchInput:string){
    
      console.log(searchInput)
  }

}
