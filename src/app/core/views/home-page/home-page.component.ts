import { Component } from '@angular/core';
import { GenericBoxComponent } from '../../../shared/components/generic-box/generic-box.component';

@Component({
  selector: 'app-home-page',
  imports: [GenericBoxComponent],
  standalone:true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
