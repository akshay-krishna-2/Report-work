import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvggroupbyComponent } from './avggroupby.component';

describe('AvggroupbyComponent', () => {
  let component: AvggroupbyComponent;
  let fixture: ComponentFixture<AvggroupbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvggroupbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvggroupbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
