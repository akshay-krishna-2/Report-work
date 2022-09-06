import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../City';
import { CitiesService } from '../services/cities.service';
import { Time } from '@angular/common';
import { AvgNumerical } from '../AvgNumerical';
import { PeriodicData } from '../PeriodicData';
ActivatedRoute
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges{

  cityId : number;
  city: City[];
  categoricaltime : PeriodicData[];
  numericaltime : PeriodicData[];
  overalltime : PeriodicData[];
  avgnumericaltime : AvgNumerical[];
  groupavgnumericaltime : AvgNumerical[];


  constructor(private activatedroute : ActivatedRoute, private citiesService : CitiesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
 ngOnInit(){

 }

  /*ngOnInit(): void {
    let url : any;
    url = this.activatedroute.snapshot.paramMap.get('id');
    if(url)
    this.cityId = parseInt(url)
    const myTimer = timer(0, 4000)
    myTimer
    .pipe(
      mergeMap( () => this.citiesService.getNumericalTimebyId(this.cityId) )
    )
    .subscribe(
      (responsedata:any) => (this.numericaltime = responsedata)
    );

    
    this.citiesService.getCitiesbyId(this.cityId).subscribe(
      (responsedata:any) => (this.city = responsedata)
      );

    this.citiesService.getAvgNumericalTimebyId(this.cityId).subscribe(
      (responsedata:any) => (this.avgnumericaltime = responsedata)
    );

    this.citiesService.getCategoricalTimebyId(this.cityId).subscribe(
      (responsedata:any) => (this.categoricaltime = responsedata)
    );
    this.citiesService.getGroupAvgNumericalTimebyId(this.cityId).subscribe(
      (responsedata:any) => (this.groupavgnumericaltime = responsedata)
    );
         
  }*/

}
