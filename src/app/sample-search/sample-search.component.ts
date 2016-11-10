import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-results',
  templateUrl: './sample-search.component.html',
  styleUrls: ['./sample-search.component.css']
})
export class SearchResultsComponent implements OnInit {

  clientWidth: number;
  mobile: boolean;
  listMode: boolean;

  temperature = 32;
  precipitation = 4;
  snowfall = 10;
  toggle = true;

  get format()   {
    return this.toggle ? 'imperial' : 'metric';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  isMobile(event?) {
    this.clientWidth = document.documentElement.clientWidth;
    if (this.clientWidth < 769) {
      this.listMode = true;
      this.mobile = true;
    } else {
      this.listMode = false;
      this.mobile = false;
    }
  }

  listModeOn() {
    if (!this.mobile) {
      this.listMode = true;
    }
  }

  calendarMode() {
    if (!this.mobile) {
      this.listMode = false;
    }
  }

  ngOnInit(): void {
    this.isMobile();
    console.log(this.mobile)
  }

  onResize() {
    this.isMobile(event);
    console.log(this.clientWidth);
    console.log(this.mobile);
  }


}
