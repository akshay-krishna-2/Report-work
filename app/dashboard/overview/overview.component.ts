import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AvgNumerical } from 'src/app/AvgNumerical';
import { City } from '../../City';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Input() citydetails : City;  
  @Input() avgnumericaldetails : AvgNumerical[];  

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log(this.citydetails)
    console.log(this.avgnumericaldetails)
  }

  onExit() {
    this.router.navigate(['/cities']);
  }


}
