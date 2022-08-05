import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { IStreets } from './IStreets';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { PlaceService } from '../Place.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { StreetDailogComponent } from '../street-dailog/street-dailog.component';
import { ICities } from '../cities/ICities';


@Component({
  selector: 'app-streets',
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.scss']
})
export class StreetsComponent implements OnInit {

  @Input() city:ICities | undefined;
  @Input() idCity:number | undefined;

  ThisStreet:IStreets ={
    streetId:0,
    streetName:"",
    cityId:0,
   }

  Streets:IStreets[]= this.placeService.arrSteerts;


StreetsControl = new FormControl('');

  filteredStreets: Observable<IStreets[]> | undefined;

  constructor(private _route : ActivatedRoute,
    private placeService: PlaceService,
    public dialog: MatDialog) { 
    console.log(this._route.snapshot.paramMap.get('id'));
    // this.idCity = Number(this._route.snapshot.paramMap.get('id'));
    console.log("idCity: "+this.idCity);
    
  }

  ngOnInit() {
   
   

    this.filteredStreets = this.StreetsControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): IStreets[] {
    const filterValue = value.toLowerCase();

    return this.Streets.filter(x => x.streetName.toLowerCase().includes(filterValue));
  }



  OpenDailoge(eestreet:IStreets){
    this.dialog.open(StreetDailogComponent,{data:{city:this.city,streetObj:eestreet}} );
  }
  // UpdateDailoge(street:IStreets){
  //   this.dialog.open(StreetDailogComponent,{data:this.city} ,{streetObj:eestreet});

  // }

  
  
}
