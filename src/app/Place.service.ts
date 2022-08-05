import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { ICities } from './cities/ICities';
import { IStreets } from './streets/IStreets';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  httpOptions:any;
  arrCities!:ICities[];
  arrSteerts!:IStreets[];

  constructor(private _http: HttpClient) { 
    this.httpOptions = { withCredentials: true} 

  }

postNewStreet(streetName:string | null, cityId:number){
  debugger;
  return this._http.post<any>(`http://localhost:54902/api/Values/InsertNewStreet?streetName=${streetName}&cityId=${cityId}`,this.httpOptions).pipe();

}

  GetCities(): Observable<ICities[]>  {
    return this._http.get<ICities[]>('http://localhost:54902/api/Values/GetCities').pipe(
      tap(x => { console.log(x); })
    );
  }  

  GetStreets(): Observable<IStreets[]>  {
    return this._http.get<IStreets[]>('http://localhost:54902/api/Values/GetStreets').pipe(
      tap(x => { console.log(x); })
    );
  }  

  PutStreet(streetId:number, streetName:string | null, cityId:number){
    debugger;
    return this._http.put<any>(`http://localhost:54902/api/Values/UpdateStreet?streetId=${streetId}&streetName=${streetName}&cityId=${cityId}`,this.httpOptions).pipe();

  }


  DleeteStreete(streetId:number){
    debugger;
    return this._http.put<any>(`http://localhost:54902/api/Values/DeleteStreet?streetId=${streetId}`,this.httpOptions).pipe();

  }

}

  