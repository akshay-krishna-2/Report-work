import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels'
import { AvgNumerical } from 'src/app/AvgNumerical';
import {FormGroup, FormControl} from '@angular/forms';
import { CitiesService } from 'src/app/services/cities.service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogcategoricalComponent } from '../dialogcategorical/dialogcategorical.component';
import { DialognumericalComponent } from '../dialognumerical/dialognumerical.component';
@Component({
  selector: 'app-avggroupby',
  templateUrl: './avggroupby.component.html',
  styleUrls: ['./avggroupby.component.css']
})
export class AvggroupbyComponent implements OnInit, OnChanges {
  
  @Input() avggroupby : AvgNumerical[];
  avggroupbyfetch : AvgNumerical[];
  switchY : string
  switchlistY : string[]
  switchX : string
  switchlistX : string[]
  cityId : number;
  isfetch : boolean = false;
  start : string;
  end : string;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'>; 

  constructor(private citiesService : CitiesService,private activatedroute : ActivatedRoute, public dialog: MatDialog) { }
  
  ngOnChanges(): void {
    // let data: any[] = []
    // let labelvar : string = ''

    // if (this.switchY === 'avg_Skilled_Available'){
    //   labelvar ='Avg Skilled Available'
    //   data = this.avggroupby.map((value) =>
    //   {
    //     let obj = { data : [value.avg_Skilled_Available], label: value.ts_Ruling_Party}
    //     return obj
    //   }
    //   )
    // }
    // else if (this.switchY === 'avg_Transportation_Cost')
    // {     
    //   labelvar ='Avg Transportation Cost'
    //   data = this.avggroupby.map((value) =>
    //   {
    //     let obj = { data : [value.avg_Transportation_Cost], label: value.ts_Ruling_Party}
    //     return obj
    //   }
    //   )
    // }
    // else if (this.switchY === 'avg_Vendors_Available')
    // {
    //   labelvar ='Avg Vendors Available'
    //   data = this.avggroupby.map((value) =>
    //   {
    //     let obj = { data : [value.avg_Vendors_Available], label: value.ts_Ruling_Party}
    //     return obj
    //   }
    //   )
    // } 
    // else if (this.switchY === 'avg_Labour_Cost')
    // {
    //   labelvar ='Avg Labour Cost'
    //   data = this.avggroupby.map((value) =>
    //   {
    //     let obj = { data : [value.avg_Labour_Cost], label: value.ts_Ruling_Party}
    //     return obj
    //   }
    //   )
    // }
    // else if (this.switchY === 'avg_Work_Rate')
    // {
    //   labelvar ='Avg Work Rate'
    //   data = this.avggroupby.map((value) =>
    //   {
    //     let obj = { data : [value.avg_Work_Rate], label: value.ts_Ruling_Party}
    //     return obj
    //   }
    //   )
    // }

    // this.barChartData = {
    //   labels: [labelvar],
    //   datasets: data
    // };
    
  }

  Refetch(): void {
    let url : any;
    url = this.activatedroute.snapshot.paramMap.get('id');
    if(url)
    this.cityId = parseInt(url)
    if(this.range.value.start && this.range.value.end)
    {
      this.start = this.range.value.start.toISOString()
      this.end = this.range.value.end.toISOString()
     /* this.citiesService.getGroupAvgNumericalTimebyIdandRange(this.cityId, this.start, this.end).subscribe(
        (responsedata:any) => { 
          this.avggroupbyfetch = responsedata;
          let data = this.avggroupbyfetch.filter((value) => (
            value.numerical === this.switchY
            )).filter((value) => (
              value.category === this.switchX
              )).map((value) => {
            let obj = {
              data: [value.average], 
              label: value.subCategory
            }
            return obj
          })
          this.barChartData = {
            labels: ['Avg' + ' ' + this.switchY],
            datasets: data
          };
          
          this.isfetch = true;
        }
      );*/
    }
  }

  Reset(): void {
    this.isfetch = false;
    this.Switch();
  }

  Switch(): void {
    if ( this.isfetch === false ){
    let data = this.avggroupby.filter((value) => (
      value.numerical === this.switchY
      )).filter((value) => (
        value.category === this.switchX
        )).map((value) => {
      let obj = {
        data: [value.average], 
        label: value.subCategory
      }
      return obj
    })
    this.barChartData = {
      labels: ['Avg' + ' ' + this.switchY],
      datasets: data
    };
  }
  else {
    let data = this.avggroupbyfetch.filter((value) => (
      value.numerical === this.switchY
      )).filter((value) => (
        value.category === this.switchX
        )).map((value) => {
      let obj = {
        data: [value.average], 
        label: value.subCategory
      }
      return obj
    })
    this.barChartData = {
      labels: ['Avg' + ' ' + this.switchY],
      datasets: data
    };
  }
  }

  openDialogNumerical(): void {
    const dialogRef = this.dialog.open(DialognumericalComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  openDialogCategorical(): void {
    const dialogRef = this.dialog.open(DialogcategoricalComponent, {
      width: '710px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit(): void {
    this.switchlistX = this.avggroupby.map((value) => <string>(value.category)).filter((value, index, self) => self.indexOf(value) === index)
    this.switchX = this.switchlistX[0]
    this.switchlistY = this.avggroupby.map((value) => <string>(value.numerical)).filter((value, index, self) => self.indexOf(value) === index)
    this.switchY = this.switchlistY[0]

    let data = this.avggroupby.filter((value) => (
      value.numerical === this.switchY
      )).filter((value) => (
        value.category === this.switchX
        )).map((value) => {
      let obj = {
        data: [value.average], 
        label: value.subCategory
      }
      return obj
    })
    this.barChartData = {
      labels: ['Avg' + ' ' + this.switchY],
      datasets: data
    };
  }

}
