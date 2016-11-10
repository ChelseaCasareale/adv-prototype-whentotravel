import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HighestRatedService } from './highest-rated.service';
import { HighestRated } from '../model/highest-rated';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [HighestRatedService]
})

export class LandingComponent implements OnInit{
  errorMessage: string;
  topFive: HighestRated[];
  bottomFive: HighestRated[];

  constructor (private highestRatedService: HighestRatedService) {}

  getTopFive() {
    this.highestRatedService.getTopFive()
                     .subscribe(
                       topFive => this.topFive = topFive,
                       error =>  this.errorMessage = <any>error);
  }

  getBottomFive() {
    this.highestRatedService.getBottomFive()
                     .subscribe(
                       bottomFive => this.bottomFive = bottomFive,
                       error =>  this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getTopFive();
    this.getBottomFive();
  }

}
