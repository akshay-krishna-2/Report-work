import { Component, OnInit } from '@angular/core';
import { City } from '../City';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  cities: City[] = []
   
  constructor(private citiesService : CitiesService)   { }

  ngOnInit(): void {
    //this.citiesService.getCities().subscribe((cities:any) => (this.cities = cities));
  }

}
