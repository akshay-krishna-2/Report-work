import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitynavcardsComponent } from './citynavcards.component';

describe('CitynavcardsComponent', () => {
  let component: CitynavcardsComponent;
  let fixture: ComponentFixture<CitynavcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitynavcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitynavcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
