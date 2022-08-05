import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { StreetsComponent } from './streets/streets.component';

const routes: Routes = [];

@NgModule({
  imports: [
  RouterModule.forRoot([
    {path: 'App', component: AppComponent},
    {path: 'Cities_list', component: CitiesComponent},

    {path: 'Streets_list/:id', component: StreetsComponent},
  ]),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
