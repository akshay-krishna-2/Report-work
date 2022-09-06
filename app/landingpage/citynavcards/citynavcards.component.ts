import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../City';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citynavcards',
  templateUrl: './citynavcards.component.html',
  styleUrls: ['./citynavcards.component.css']
})
export class CitynavcardsComponent implements OnInit {
  @Input() city: City;

  constructor(private router : Router) { }
  ngOnInit(): void {
    console.log(this.city)
  }
  onClick(Id : number) {
    this.router.navigate(['/cities',Id]);
  }
}
