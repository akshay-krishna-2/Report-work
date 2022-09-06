import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private http: HttpClient) { }


  getAttributeDetails01( name : any)
  {
    return this.http.get('https://localhost:7216/CompanyAPI/'+name);
  }

  Companies()
  {
    return this.http.get('https://localhost:7216/CompanyAPI');
  }

  getCoordinates( city_name : any)
  {
    return this.http.get('https://api.openweathermap.org/geo/1.0/direct?q='+ city_name+'&appid=185878c51e0dcb9011d96afe860b0d56');
  }

  getWeather(lat:any, lon:any)
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=185878c51e0dcb9011d96afe860b0d56');
  }

  get_cities()
  {
    let data:any = [
      {
        city_name: "Chennai",

        factor1:{
          type:"line",
          factor_name:"stats",
          data_sets: [ {
            data: [ 300, 500, 100, 600, 900 ],
            label: 'profits', 
          } ],
          labael:["2018","2019","2020","2021","2022"],
        },

        factor2:{
          type:"pie",
          factor_name:"Ownership",
          data_sets: [ {
              data: [ 100, 600, 674,200, 50 ],
              label: 'stocks' 
          } ],
          labael:["A","B","C","D", "others"],
        },
        factor3:{
          type:"string",
          factor_name:"weather",
          data_sets:"",
        },
        
        factor4:{},
        factor5:{},
        factor6:{},
        factor7:{},
        factor8:{},
        factor9:{},
      },
      
      {
        city_name:"Mumbai",
        factor1:{},
        factor2:{},
        factor3:{
          type:"string",
          factor_name:"weather",
          data_sets:"",
        },
        factor4:{},
        factor5:{},
        factor6:{},
        factor7:{},
        factor8:{},
        factor9:{},
      },
      {
        city_name:"Delhi",
        factor1:{},
        factor2:{},
        factor3:{
          type:"string",
          factor_name:"weather",
          data_sets:"",
        },
        factor4:{},
        factor5:{},
        factor6:{},
        factor7:{},
        factor8:{},
        factor9:{},
      },

      {
        city_name:"Bangalore",
        factor1:{},
        factor2:{},
        factor3:{
          type:"string",
          factor_name:"weather",
          data_sets:"",
        },
        factor4:{},
        factor5:{},
        factor6:{},
        factor7:{},
        factor8:{},
        factor9:{},
      },
      {
        city_name:"Jaipur",
        factor1:{},
        factor2:{},
        factor3:{
          type:"string",
          factor_name:"weather",
          data_sets:"",
        },
        factor4:{},
        factor5:{},
        factor6:{},
        factor7:{},
        factor8:{},
        factor9:{},
      },
      
      /*{
        city_name:""
      },*/


    ];

    return data;
  }
}



  /*getCompanyProjects( name:string)
  {
    let data:any = [];
    if( name == "L&T Construction")
    { 
      data = [
        {
          "company_name": "L&T Construction",
          "Project" : "Mumbai International Airport",
          "Status" : "completed",
          "Skilled_Labour" : 456,
          "Unskilled_Labour" : 45646,
          "Sector": "Airport"
        },

        {
          "company_name": "L&T Construction",
          "Project" : "The Bahai Temple",
          "Status" : "completed",
          "Skilled_Labour" : 456,
          "Unskilled_Labour" : 45645,
          "Sector": "Unique Structures"
        },
        {
          "company_name": "L&T Construction",
          "Project" : "Statue of Unity",
          "Status" : "completed",
          "Skilled_Labour" : 435,
          "Unskilled_Labour" : 12314,
          "Sector": "Unique Structures"
        },
        {
          "company_name": "L&T Construction",
          "Project" : "Mumbai Survilance project",
          "Status" : "completed",
          "Skilled_Labour" : 456,
          "Unskilled_Labour" : 23421,
          "Sector": "Smart World Solutions"
        },
        {
          "company_name": "L&T Construction",
          "Project" : "Riyadh Metro",
          "Status" : "completed",
          "Skilled_Labour" : 456,
          "Unskilled_Labour" : 12346,
          "Sector": "Metro"
        },
        {
          "company_name": "L&T Construction",
          "Project" : "Motera Cricket Stadium",
          "Status" : "completed",
          "Skilled_Labour" : 345,
          "Unskilled_Labour" : 6784,
          "Department_contributuon": "Public Spaces"
        },
        {
          "company_name": "L&T Construction",
          "Project" : "High-Speed Rail Corridor",
          "Status" : "ongoing",
          "Skilled_Labour" : 234,
          "Unskilled_Labour" : 345346,
          "Department_contributuon": "Rail Way"
        },

        {
          "company_name": "L&T Construction",
          "Project" : "Dhubri-Pulbari Bridge",
          "Status" : "ongoing",
          "Skilled_Labour" : 675,
          "Unskilled_Labour" : 45643,
          "Department_contributuon": "Bridges"
        },
        {
          "company_name": "L&T Construction",
          "Project" :"Dhak Metro",
          "Status" : "ongoing",
          "Skilled_Labour" : 546,
          "Unskilled_Labour" : 6786,
          "Department_contributuon": "Metro"
        },
        /*{
          "Project" : ,
          "Status" : ,
          "Skilled_Labour" : ,
          "Unskilled_Labour" : ,
          "Department_contributuon":
        },
        
      ]
    }
    return data;
  }*/

/*
data = [
        {
          company_name : "L&T Construction",
          attribute_name: "Bridges",
          skills : [{
            Data: [{
              data: [ 300, 500, 100 ],
              backgroundColor: [
                "rgba(254, 251, 238, 0.7)",
                "rgba(210, 202, 163, 0.7)",
                "rgba(210, 202, 194, 0.7)",
                "rgba(255, 202, 149, 0.7)",
              ],
              hoverBackgroundColor: [
                "rgba(254, 251, 238, 1)",
                "rgba(210, 202, 163, 1)",
                "rgba(210, 202, 194, 1)",
                "rgba(255, 202, 149, 1)",
              ]
            }],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{
              data : [300,549,2387,3476] 
              ,backgroundColor: [
                "rgba(254, 251, 238, 0.7)",
                "rgba(210, 202, 163, 0.7)",
                "rgba(210, 202, 194, 0.7)",
                "rgba(255, 202, 149, 0.7)",
              ],
              hoverBackgroundColor: [
                "rgba(254, 251, 238, 1)",
                "rgba(210, 202, 163, 1)",
                "rgba(210, 202, 194, 1)",
                "rgba(255, 202, 149, 1)",
              ]
            }],
            label : ['steel', 'concrete', 'sand', 'bricks'],
          }],
          projects : 
          [{
            Data:
            [{
              data: [2,3,4,1,5,2], 
              label:"projects completed", 
              backgroundColor: ["rgba(254, 251, 238, 0.7)",],
              hoverBackgroundColor: ["rgba(254, 251, 238, 1)",]
            }],
            label : ['2002','2003', '2004', '2005', '2006', '2007']
          }],
          attributes: [{
            Data: [{
              data : [60,20,10,10] 
              ,backgroundColor: [
                "rgba(254, 251, 238, 0.7)",
                "rgba(210, 202, 163, 0.7)",
                "rgba(210, 202, 194, 0.7)",
                "rgba(255, 202, 149, 0.7)",
              ],
              hoverBackgroundColor: [
                "rgba(254, 251, 238, 1)",
                "rgba(210, 202, 163, 1)",
                "rgba(210, 202, 194, 1)",
                "rgba(255, 202, 149, 1)",
              ]
            }],
            label : ['time', 'money', 'length', 'cost'],
          }],
          factors: [{
            Data: [{
              data : [60,20,10,10] 
              ,backgroundColor: [
                "rgba(254, 251, 238, 0.7)",
                "rgba(210, 202, 163, 0.7)",
                "rgba(210, 202, 194, 0.7)",
                "rgba(255, 202, 149, 0.7)",
              ],
              hoverBackgroundColor: [
                "rgba(254, 251, 238, 1)",
                "rgba(210, 202, 163, 1)",
                "rgba(210, 202, 194, 1)",
                "rgba(255, 202, 149, 1)",
              ]
            }],
            label : ['cost', 'place', 'season', 'time'],
          }],
          
        },
        {
          company_name : "L&T Construction",
          attribute_name: "Airport",
          skills : [{
            Data: [{data: [ 300, 500, 100 ]},],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{}],
            label : [],
          }],
          projects : [{
            Data: [{}],
            label : [],
          }],
          attributes: [{
            Data: [{}],
            label : []
          }],
          factors: [{
            Data: [{}],
            label : [],
          }],
          
        },

        {
          company_name : "L&T Construction",
          attribute_name: "Hospital",
          skills : [{
            Data: [{data: [ 300, 500, 100 ]},],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{}],
            label : [],
          }],
          projects : [{
            Data: [{}],
            label : [],
          }],
          attributes: [{
            Data: [{}],
            label : []
          }],
          factors: [{
            Data: [{}],
            label : [],
          }],
          
        },
        {
          company_name : "L&T Construction",
          attribute_name: "Housing Projects",
          skills : [{
            Data: [{data: [ 300, 500, 100 ]},],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{}],
            label : [],
          }],
          projects : [{
            Data: [{}],
            label : [],
          }],
          attributes: [{
            Data: [{}],
            label : []
          }],
          factors: [{
            Data: [{}],
            label : [],
          }],
          
        },
        {
          company_name : "L&T Construction",
          attribute_name: "Metros",
          skills : [{
            Data: [{data: [ 300, 500, 100 ]},],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{}],
            label : [],
          }],
          projects : [{
            Data: [{}],
            label : [],
          }],
          attributes: [{
            Data: [{}],
            label : []
          }],
          factors: [{
            Data: [{}],
            label : [],
          }],
          
        },
        {
          company_name : "L&T Construction",
          attribute_name: "Ports",
          skills : [{
            Data: [{data: [ 300, 500, 100 ]},],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{}],
            label : [],
          }],
          projects : [{
            Data: [{}],
            label : [],
          }],
          attributes: [{
            Data: [{}],
            label : []
          }],
          factors: [{
            Data: [{}],
            label : [],
          }],
          
        },
        {
          company_name : "L&T Construction",
          attribute_name: "Railways",
          skills : [{
            Data: [{data: [ 300, 500, 100 ]},],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{}],
            label : [],
          }],
          projects : [{
            Data: [{}],
            label : [],
          }],
          attributes: [{
            Data: [{}],
            label : []
          }],
          factors: [{
            Data: [{}],
            label : [],
          }],
          
        },
        {
          company_name : "L&T Construction",
          attribute_name: "Office Spaces",
          skills : [{
            Data: [{data: [ 300, 500, 100 ]},],
            label: ['architect ', 'engineer', 'construction crew'],
          }],
          material : [{
            Data: [{}],
            label : [],
          }],
          projects : [{
            Data: [{}],
            label : [],
          }],
          attributes: [{
            Data: [{}],
            label : []
          }],
          factors: [{
            Data: [{}],
            label : [],
          }],
          
        },
      ];
*/