import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstatsComponent } from './projectstats.component';

describe('ProjectstatsComponent', () => {
  let component: ProjectstatsComponent;
  let fixture: ComponentFixture<ProjectstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
