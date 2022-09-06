import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersustimeseriesComponent } from './versustimeseries.component';

describe('VersustimeseriesComponent', () => {
  let component: VersustimeseriesComponent;
  let fixture: ComponentFixture<VersustimeseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersustimeseriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersustimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
