import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {path: 'cities', component: LandingpageComponent},
  {path: 'cities/:id', component: DashboardComponent},
 // {path: 'mapView', component: ProjectDetailsComponent},
  {path: 'projects', component: ProjectDetailsComponent},
  {path: 'dummy', component: DummyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
