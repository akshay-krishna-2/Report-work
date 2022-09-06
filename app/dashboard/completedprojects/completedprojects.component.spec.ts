import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedprojectsComponent } from './completedprojects.component';

describe('CompletedprojectsComponent', () => {
  let component: CompletedprojectsComponent;
  let fixture: ComponentFixture<CompletedprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
