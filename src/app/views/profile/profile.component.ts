import { Component, OnInit } from "@angular/core";

declare var google: any;

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const myLatLng = {lat: -25.363, lng: 131.044};

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }
}
