import { Company } from './../../models/company';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompanyDataService } from '../services/company-data.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})



export class DummyComponent implements OnInit {

  //declarations
  weather:string[] = [];
  Company_name : string = "" ;
  sector :string = "" ;
  cities:any;
  length:number;
  pages :any = [];
  boxes = ["factor1", "factor2","factor3","factor4","factor5","factor6","factor7","factor8","factor9"];// just to create various factors to affect the given city

  //chartdata
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
  };
  

  constructor(private list: CompanyDataService,) 
  { 
    this.cities = this.list.get_cities();
    this.length = this.cities.length
    if(history.state)
    {
      let companies:any ;
      this.list.Companies().subscribe((response:any) => {
        companies = response;
        if(typeof(history.state.company) !== 'undefined')
        {
          this.Company_name = companies[(history.state.company as number)-1].companyName;
          this.sector = history.state.sector;
        } 
      });
    }

    //to get the coordinates of the city
    for(let i = 0 ; i< this.cities.length ; i++)
    {

      this.list.getCoordinates(this.cities[i].city_name).subscribe((response: any) =>
      {
        if(typeof(response[0]) !== 'undefined')
        { 
          this.list.getWeather(response[0].lat,response[0].lon).subscribe((weather: any) =>
          {
            if(typeof(weather) !== 'undefined')
              this.weather[i] = weather.weather[0].main;
          });
        }
      });
      
      //this.cities[i].factor3.data_sets = this.weather[i];
      console.log("weather:",this.weather);
    }  
    //to check the weather
    /*
    
    */

    //sets the value of all the pages for diffrent cities dynamically
    for (var i = 0 ; i< this.length ; i++ )
      this.pages[i] = 0;
  }

  ngOnInit(): void {}
  //function to show more data regarding the chart
  public chartClicked(element: any)
  {
    alert("chart clicked");
  }
  // functions to perform carousel/slidshow change
  public plusSlides(n : number, button : any)
  {
    
    for( let i = 0 ; i < this.length ; i++ )
      if( button.target.parentElement.id == this.cities[i].city_name )
      {
        this.page_change(this.pages[i]+ n,button.target.parentElement,i);
      }
        
    //console.log(button.target.parentElement.children[2],2);
  }

  public currentSlide(n : number, button : any)
  {
    for( let i = 0 ; i < this.length ; i++ )
      if( button.target.parentElement.parentElement.id == this.cities[i].city_name )
        this.page_change(this.pages[i] = n,button.target.parentElement.parentElement,i);
  }
  

  private page_change(n: number, parent:any, i: number)
  {
    let length = 3;//number of boxes
    let start = 2; //starting position of the child-div-attributeHolder
    if(n == -1 )
    {
      this.pages[i] = length-1;
      
    }
    else if( n > length -1 )
    {
      this.pages[i] = 0;
      
    }  
    else
    {
      this.pages[i] = n;
      
    }  

    for(var j = 0 ; j < length ; j++)
      if( j != this.pages[i])
        parent.children[2+j].style = "display:none;";

    parent.children[2+this.pages[i]].style = "";  

  }
}

class city
{
  city_name:string;
  lattitude:number;
  longitude:number;
  factor3:any;
}