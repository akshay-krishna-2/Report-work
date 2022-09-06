import { Company } from './../../models/company';
import { Component, AfterViewInit,Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MapDataService } from '../services/map-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import * as L from 'leaflet';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements AfterViewInit {

  
  private map:any ; //data regarding map
  public data:any; //data regarding the various comapnies lattitude and longitude
  private Layer:any;
  public loc:any;
  public tittle:string;
  lat:number = 0;
  lng:number = 0;
  companies:any = [];
  
  @ViewChild('hello', { static: false }) divHello: ElementRef;
  @ViewChild('up', { static: false }) up: ElementRef;
  @ViewChild('down', { static: false }) down: ElementRef;
  @ViewChild('tableData', { read: ElementRef }) table: ElementRef;//to view a non native element
  @ViewChild('arrow', { read: ElementRef }) arrow: ElementRef;
  @ViewChild('box', { read: ElementRef }) box: ElementRef;
  @ViewChild('company_name', { static: false }) p_companyName: ElementRef; 
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  QuereyParameter: any;
  company_code: any;

  constructor(
    private list: MapDataService,
    private route: ActivatedRoute,
    private router: Router,
    private location : Location,
  )
  {
    
    
    //reciving the coordinate details  
    this.data = this.list.getList();
    this.tittle = "";
    this.URL_change("");

    //adds the arrow change event listner to the window
    window.addEventListener('click', (e) => 
    {   
      if (this.box.nativeElement.contains(e.target)){
        //inside
        this.arrow.nativeElement.innerHTML = "arrow_drop_up";
      } else{
        //outside
        this.arrow.nativeElement.innerHTML = "arrow_drop_down";
      }
    });

    window.addEventListener('mouseover', (e) => 
    {   
      if (this.box.nativeElement.contains(e.target)){
        console.log("inside");
        this.arrow.nativeElement.innerHTML = "arrow_drop_up";
        this.trigger.openMenu();

      } 
    });

    
  }

  arrow_change(arrow:any)
  {
    let ele =   this.arrow.nativeElement;
    ele.innerHTML = "arrow_drop_down";
  }
  private URL_change(company_name:string)
  {
    if( company_name == "")
    {
      const url = this.router.createUrlTree([], {relativeTo: this.route}).toString();
      this.location.go(url);
      return;
    }
    
    const url = this.router.createUrlTree([], {
      relativeTo: this.route, 
      queryParams: {companyName: company_name},
    }).toString();
    this.location.go(url);
    //can be used to read the paramter passed in cities website
    this.route.queryParamMap.subscribe((params: any) => 
    {
      //console.log(params) //give .companyName to access the companyName
    }
    );
  }
  private initMap()
  {
    //sets the location on the map
    var bounds = new L.LatLngBounds(new L.LatLng(90, 180), new L.LatLng(-90, -190));

    this.map = L.map('map', {
      center: [ this.lat , this.lng ],
      zoom: 11,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0
    });

    //sets up the tile layer
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    });
    tiles.addTo(this.map);
    
    this.Layer = L.layerGroup().addTo(this.map);
    
    //user location - marker daetails
    if( this.lat != 0 || this.lng != 0 )
    {
      var marker = L.marker([this.lat, this.lng ]);
      marker.addTo(this.map);
      //popup details
      marker.bindPopup("<b>User</b><br>Location").openPopup;  
    }    
  } 

  private map_zoom()
  {
    var zoom = this.map.getZoom();
    if( zoom >= 4)
    {
      var duration;
      if( zoom <= 8)
        duration = 1.5;
      
      if( zoom <= 12)
        duration = 2;
      
      else
        duration = 3;
      
      this.map.flyTo([13.0382 , 80.1565 ], 4, {
      animate: true,
      duration: duration
      });
    }
  }

  private marker_details()
  {
    var greenIcon = L.icon({
      iconUrl: 'assets/icons/green.png',
      iconSize:     [35, 45], // size of the icon
      iconAnchor:   [35, 45], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var amberIcon = L.icon({
      iconUrl: 'assets/icons/amber.png',
      iconSize:     [40, 40], // size of the icon
      iconAnchor:   [40, 40], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    for(var i = 0; i<this.loc.inprogress_latitudes.length ; i++ )
      L.marker( [this.loc.inprogress_latitudes[i], this.loc.inprogress_longitudes[i]] , {icon: amberIcon}).addTo(this.Layer);

    for(var i = 0; i<this.loc.completed_latitudes.length ; i++ )
      L.marker( [this.loc.completed_latitudes[i], this.loc.completed_longitudes[i]] , {icon: greenIcon}).addTo(this.Layer);
  
  }
  

  dropdown(company:any) // sets the map accordind to the particular company
  {

    //change arrow
    this.arrow.nativeElement.innerHTML = "arrow_drop_up";

    //zooms out the 
    this.map_zoom();
    
    //changes the company name
    this.divHello.nativeElement.id = company.target.id;
    this.divHello.nativeElement.innerHTML =  company.target.id;
    this.tittle = company.target.id; //changes the name of the company table-data
    
    
    var knt = 0;

    //change URL
    this.URL_change(company.target.id);
  
    //reciving the coordinate details  
    for( var i = 0; i<=this.companies.length ; i++ )
    {
      //console.log(this.companies[i].company_name);
      if( this.companies[i].company_name === company.target.id )
      {
        this.loc = this.companies[i];
        knt++;
        this.company_code = this.companies[i].company_code;
        break;
      }
    }  
    //console.log( "the loc variable is",this.loc);

    //clears all markers
    this.Layer.clearLayers();
  
    //projects marker details
    if( knt != 0)
      this.marker_details();// sets the project location
      
  }

  ngAfterViewInit() 
  { 
    //calls the geolocation procedure
    navigator.geolocation.getCurrentPosition((position )=>
    {
      //gets us the position of the lattitude and longitude
      if( navigator.geolocation )
      { 
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }
      else
      //if user didnt let us use his geolocation
        this.lat = this.lng = 0;

      //sets up the map
      this.initMap();

      

    });  
    
    //to get the list of companies
    this.list.getList().subscribe((response: any) => {
      this.companies = response;
    });
  }
}