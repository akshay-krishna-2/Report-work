import { Component, OnInit, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { City } from 'src/app/City';

@Component({
  selector: 'app-projectstats',
  templateUrl: './projectstats.component.html',
  styleUrls: ['./projectstats.component.css']
})
export class ProjectstatsComponent implements OnInit {

  @Input() citydetails : City;
  public doughnutChartLabels: string[] = [ 'Completed', 'Onhold', 'Ongoing','Dropped'];
  public doughnutChartData: ChartData<'doughnut'> 
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }
  
  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 
          this.citydetails.completedOnTime + this.citydetails.completedLate, 
          this.citydetails.onhold, 
          this.citydetails.ongoing, 
          this.citydetails.dropped
        ] }
      ]
    };
  }


}
