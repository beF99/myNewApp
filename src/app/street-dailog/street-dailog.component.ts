import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ICities } from '../cities/ICities';
import { PlaceService } from '../Place.service';
import {MatIconModule} from '@angular/material/icon';
import { IStreets } from '../streets/IStreets';

@Component({
  selector: 'app-street-dailog',
  templateUrl: './street-dailog.component.html',
  styleUrls: ['./street-dailog.component.scss']
})
export class StreetDailogComponent implements OnInit {

  StreetsNameControl = new FormControl('');
  fff!:string | null;

  constructor(  private placeService: PlaceService,
    public dialogRef: MatDialogRef<StreetDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {city:ICities, streetObj:IStreets } ) { }

  ngOnInit(): void {
    this.StreetsNameControl.setValue(this.data.streetObj.streetName)
   
  }

  addStreete(){
    debugger;
    this.placeService.postNewStreet(this.StreetsNameControl.value, this.data.city.cityId).subscribe(
     
    );
    this.dialogRef.close();
  }

  updateStreete(){
    this.placeService.PutStreet(this.data.streetObj.streetId, this.StreetsNameControl.value, this.data.streetObj.cityId)
    .subscribe()
    this.dialogRef.close();
  }

  DleeteStreete(){
    this.placeService.DleeteStreete(this.data.streetObj.streetId).subscribe();
    this.dialogRef.close();
  }
}
