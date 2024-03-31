import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme: boolean = true;
  private readonly themeKey: string = 'appTheme';

  constructor(@Inject(DOCUMENT) private document:Document) {
    this.loadTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.saveTheme();
  }

  getCurrentTheme() {
    return this.isDarkTheme ? 'dark-theme' : 'light-theme';
  }

  private saveTheme() {
    localStorage.setItem(this.themeKey, this.isDarkTheme ? 'dark' : 'light');
  }

  private loadTheme() {
    const localStorage = this.document.defaultView?.localStorage
    if(localStorage){
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
    } else if (savedTheme === 'light') {
      this.isDarkTheme = false;
    }
  }}
}
