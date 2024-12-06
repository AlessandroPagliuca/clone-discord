import { Component } from '@angular/core';
import { Country } from '../../../shared/models/country';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-footer',
  imports: [MaterialModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected countriesList: Country[] = [
    {
      flag: 'en',
      state: 'English',
    },
    {
      flag: 'it',
      state: 'Italiano',
    },
    {
      flag: 'es',
      state: 'Espanol',
    },
    {
      flag: 'fr',
      state: 'Francais',
    },
  ]
  protected selectedCountry: string = this.countriesList[0].flag;

  getStateByFlag(flag: string): string {
    const country = this.countriesList.find(c => c.flag === flag);
    return country ? country.state : '';
  }
}