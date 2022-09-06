import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcategoricalComponent } from './dialogcategorical.component';

describe('DialogcategoricalComponent', () => {
  let component: DialogcategoricalComponent;
  let fixture: ComponentFixture<DialogcategoricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcategoricalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogcategoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
