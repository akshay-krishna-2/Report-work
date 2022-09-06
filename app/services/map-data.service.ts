import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {



  constructor(private http: HttpClient) { }

  getList()
  {
    /*let a =[{

      "company_code": 1, 
      "company_name":"L&T Construction",
      "completed_latitudes":  [17.2403,19.0931,56,42.0744,21.8380,24.7193,23.0917], 
      "completed_longitudes":  [78.4294,72.8568,56,87.6843,73.7191,46.6960,72.5975],
      "inprogress_latitudes" : [23.7928,28.6139,19.8739],
      "inprogress_longitudes" : [90.4082,77.2091,19.8739],
    }
    ,
    {
      
      "company_code": 2,  
      "company_name":"L&T Infotech",
      "completed_latitudes": [-71.3198,34.4898,-69.5874,-72.2248,8.0904,89.1007,72.1083,-49.7578,62.9200,-48.5823,-48.5823], 
      "completed_longitudes":  [166.4805,-43.6216,60.8076,66.4331,-9.6023,-42.6738,-73.2240,-104.4723,92.2843,-44.9306,-101.4817,],
      "inprogress_latitudes" : [23.7928,28.6139,19.8739],
      "inprogress_longitudes" : [90.4082,77.2091,19.8739]
      
    }];
    return a;*/
    return this.http.get('https://localhost:7216/MapData');
  } 

  getCompanies()
  {
    return this.http.get('https://localhost:7216/CompanyAPI');
  }
}

