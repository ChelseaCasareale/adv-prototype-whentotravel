import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  clientWidth: number;
  mobile: boolean;
  listMode: boolean;

  constructor() {}

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

  mapMode() {
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
