import { Injectable } from '@angular/core';

import { City } from '../City';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AvgNumerical } from '../AvgNumerical';
import { PeriodicData } from '../PeriodicData';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private rootUrl = 'https://localhost:7210/api';

  constructor(private http: HttpClient) { }

  getCities() {
    //return this.http.get<any>('https://localhost:7210/api/city')
  }
  /*
  getCitiesbyId( id: number ) : Observable<City[]> {
    return this.http.get<City[]>(this.rootUrl+`/city/${id}`)
  }
  
  getCategoricalTimebyId( id: number ) : Observable<PeriodicData[]> {
    return this.http.get<PeriodicData[]>(this.rootUrl+`/city/CategoricalTime/${id}`)
  }
  
  getNumericalTimebyId( id: number ) : Observable<PeriodicData[]> {
    return this.http.get<PeriodicData[]>(this.rootUrl+`/city/NumericalTime/${id}`)
  }
  
  getAvgNumericalTimebyId( id: number ) : Observable<AvgNumerical[]> {
    return this.http.get<AvgNumerical[]>(this.rootUrl+`/city/NumericalTime/Average/${id}`)
  }

  getGroupAvgNumericalTimebyId( id: number ) : Observable<AvgNumerical[]> {
    return this.http.get<AvgNumerical[]>(this.rootUrl+`/city/NumericalTime/Average/Group/${id}`)
  }

  getGroupAvgNumericalTimebyIdandRange( id: number , start: string, end: string ) : Observable<AvgNumerical[]> {
    
    return this.http.get<AvgNumerical[]>(this.rootUrl+`/city/NumericalTime/Average/Group/Range/${id}?start=${start}&end=${end}`)
  }

  postNewCategoricalorSubCategory( categoryName: string, subCategoryName: string ) : Observable<any> {
    return this.http.post(this.rootUrl+`/city/Categorical?CategoricalName=${categoryName}&SubCategoryName=${subCategoryName}`, null)
  }
  
  postNewNumerical( numericalName: string) : Observable<any> {
    return this.http.post(this.rootUrl+`/city/Numerical?NumericalName=${numericalName}`, null)
  }*/

}
