import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetDailogComponent } from './street-dailog.component';

describe('StreetDailogComponent', () => {
  let component: StreetDailogComponent;
  let fixture: ComponentFixture<StreetDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
