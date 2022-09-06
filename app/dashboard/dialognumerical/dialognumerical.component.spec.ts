import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialognumericalComponent } from './dialognumerical.component';

describe('DialognumericalComponent', () => {
  let component: DialognumericalComponent;
  let fixture: ComponentFixture<DialognumericalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialognumericalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialognumericalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
