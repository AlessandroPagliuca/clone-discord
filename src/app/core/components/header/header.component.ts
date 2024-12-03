import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { LinkNavbar } from '../../../shared/models/linkNavbar';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected isMenuOpen: boolean = false;

  protected linksArrayForTest: LinkNavbar[] = [
    {
      routePage: 'http://',
      link: 'Download'
    },
    {
      routePage: 'http://',
      link: 'Nitro'
    },
    {
      routePage: 'http://',
      link: 'Quests'
    },
    {
      routePage: 'http://',
      link: 'Safety'
    },
    {
      routePage: 'http://',
      link: 'Support'
    },
    {
      routePage: 'http://',
      link: 'Blog'
    },
    {
      routePage: 'http://',
      link: 'Careers'
    },
  ]
  constructor(private breakpointObserver: BreakpointObserver) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 992px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = false;
      }
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}