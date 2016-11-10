import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  link: string;
  appLocation: string;
  searchMode: boolean;
  home: boolean;
  menuDisplay: boolean;

  constructor(private router: Router) {
    this.link = "Login";
    this.home = true;
    this.searchMode = false;
    this.menuDisplay = false;
  }

  route() {
    if (this.router.url === '/') {
      this.router.navigate(['/login']);
      this.link = "Home";
      if (this.searchMode === true) this.searchMode = false
      this.home = false;
      console.log(this.router.url)
    } else {
      this.router.navigate(['/']);
      this.link = "Login";
      if (this.searchMode === true) this.searchMode = false
      this.home = true;
      console.log(this.router.url)
    }
  }

  onClick() {
    this.home = false;
    if (this.searchMode === true) this.searchMode = false
    console.log(this.router.url)
  }

  toggleSearch() {
    this.searchMode = !this.searchMode;
    console.log(this.searchMode);
  }

  openMenu() {
    this.menuDisplay = !this.menuDisplay;
  }
}
