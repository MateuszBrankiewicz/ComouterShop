import {Component, Inject, Input} from '@angular/core';
import {LoginInputComponent} from '../login-input/login-input.component';
import {RouterLink} from '@angular/router';
import {ThemeService} from '../../theme.service';
import {DOCUMENT} from '@angular/common';
import {ProductNavbarComponent} from '../product-navbar/product-navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginInputComponent, RouterLink, ProductNavbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() username: string = '';
  @Input() userSession: string = '';

  constructor(private themeService: ThemeService, @Inject(DOCUMENT) private document: Document) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.changeButtonContent();
  }

  getTheme() {
    this.changeButtonContent();
    return this.themeService.getCurrentTheme();

  }

  changeButtonContent() {
    let btnText = document.getElementById("btn-text");
    let btnIcon = document.getElementById("btn-icon") as HTMLImageElement;
    if (btnIcon && btnText) {
      if (this.themeService.getCurrentTheme() === "dark-theme") {
        btnIcon.src = "../../../assets/img/theme/sun.png"
        btnText.innerHTML = "Light"
      } else {
        btnIcon.src = "../../../assets/img/theme/moon.png"
        btnText.innerHTML = "Dark"
      }
    }
  }

  logout() {
    const sessionStorage = this.document?.defaultView?.sessionStorage
    if (sessionStorage) {
      sessionStorage.removeItem("user");
    }
  }
}
