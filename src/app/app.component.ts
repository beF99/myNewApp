import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NavigationExtras} from  '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myNewApp';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.navigate(['Cities_list'], { relativeTo: this.route });
  }
  
}
