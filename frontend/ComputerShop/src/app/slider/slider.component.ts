import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() slides :any[] = [
   
  ];
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  @Input() autoPlay = false;
  next(){
    let currentSlide = (this.currentSlide + 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
    // if(this.autoPlay){
    //   setInterval(() => {
    //     this.next();
    //   },5000);
    // }
  }
  previous(){
      let currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
     this.jumpToSlide(currentSlide);
  }
  jumpToSlide(index:number){
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    },500);
  }
  moveImageAuto(){
        setInterval(() => {
      if(this.autoPlay){
        this.next();
      }
    },5000);
  }
  constructor(){
    // this.moveImageAuto();
  }
  
 


}