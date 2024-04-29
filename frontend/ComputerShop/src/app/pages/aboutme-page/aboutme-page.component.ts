import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-aboutme-page',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './aboutme-page.component.html',
  styleUrl: './aboutme-page.component.css'
})
export class AboutmePageComponent {

}
