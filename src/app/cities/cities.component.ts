import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { ICities } from './ICities';
import {MatGridListModule} from '@angular/material/grid-list';
import { PlaceService } from '../Place.service';



@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cityControl = new FormControl('');
  idCity:number | undefined;
  thisCity :ICities | undefined;
  arrCities!:ICities[];


  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
   
    this.placeService.GetStreets().subscribe(x=>{
      this.placeService.arrSteerts = x;
    })

    this.placeService.GetCities().subscribe(x => {
      this.placeService.arrCities = x;
      this.arrCities=x;
    })
  }

  SentCity(City :ICities){
    this.thisCity = City
    this.idCity = City.cityId;

  }
  

}
