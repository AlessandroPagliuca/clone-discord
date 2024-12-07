import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { LinkNavbar } from '../../../shared/models/linkNavbar';
import { MaterialModule } from '../../../shared/material.module';
@Component({
  selector: 'app-header',
  imports: [MaterialModule, CommonModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected isMenuOpen: boolean = false;
  protected isSlideOutRight: boolean = false;

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
        this.isSlideOutRight = false;
      } else {
        this.isMenuOpen = false;
      }
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isSlideOutRight = true;
    console.log('menu', this.isMenuOpen);
  }
}