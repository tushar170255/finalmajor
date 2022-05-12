
import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 30.3165;
  lng = 78.0322;  constructor() { }  ngOnInit() {
   ( mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }}
