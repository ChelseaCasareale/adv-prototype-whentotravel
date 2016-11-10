import { Component, OnInit } from '@angular/core';

interface UserLocations {
  name: string;
  lat: number;
  lng: number;
  month: string;
  rating: number;
}

@Component({
  selector: 'map-mode',
  templateUrl: './map-mode.component.html',
  styleUrls: ['./map-mode.component.css']
})


export class MapModeComponent {
  locations: UserLocations[] = [
    {
      name: "New York, NY",
      lat: 40.712784,
      lng: -74.005941,
      month: "January",
      rating: 5
    },
    {
      name: "Bangkok, TH",
      lat: 13.756331,
      lng: 100.501765,
      month: "March",
      rating: 5
    },
    {
      name: "Krabi, TH",
      lat: 8.086300,
      lng: 98.906283,
      month: "March",
      rating: 5
    }
  ];

  cenLat: number = 43.552847;
  cenLng: number = 7.017369;

}
