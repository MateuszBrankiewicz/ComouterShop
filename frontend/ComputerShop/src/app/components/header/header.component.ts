import { Component,Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../theme.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports:[SearchComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @Input() username: string = '';
  @Input() userSession: string = '';
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
    this.changeButtonContent();
  }

  getTheme() {
    return this.themeService.getCurrentTheme();
    this.changeButtonContent();
  }
  changeButtonContent(){
    let btnText = document.getElementById("btn-text");
    let btnIcon = document.getElementById("btn-icon") as HTMLImageElement;
    if(btnIcon && btnText){
    if(this.themeService.getCurrentTheme() === "dark-theme"){
      btnIcon.src = "../../../assets/img/theme/sun.png"
      btnText.innerHTML = "Light"
    }
  else{
    btnIcon.src = "../../../assets/img/theme/moon.png"
    btnText.innerHTML = "Dark"
  }}
  }
}
