import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { City } from 'src/app/City';

@Component({
  selector: 'app-completedprojects',
  templateUrl: './completedprojects.component.html',
  styleUrls: ['./completedprojects.component.css']
})
export class CompletedprojectsComponent implements OnInit {

  @Input() citydetails : City;
  public doughnutChartLabels: string[] = [ 'On Time', 'Late'];
  public doughnutChartData: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ this.citydetails.completedOnTime, this.citydetails.completedLate] }
      ]
    };
  }

}
