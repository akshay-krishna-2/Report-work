import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table' 
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CitynavcardsComponent } from './landingpage/citynavcards/citynavcards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { CompletedprojectsComponent } from './dashboard/completedprojects/completedprojects.component';
import { ProjectstatsComponent } from './dashboard/projectstats/projectstats.component';
import { VersustimeseriesComponent } from './dashboard/versustimeseries/versustimeseries.component';
import { TableComponent } from './dashboard/table/table.component';
import { AvggroupbyComponent } from './dashboard/avggroupby/avggroupby.component';
import { DialogcategoricalComponent } from './dashboard/dialogcategorical/dialogcategorical.component';
import { DialognumericalComponent } from './dashboard/dialognumerical/dialognumerical.component';
import { MapDataService } from './services/map-data.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TableDataComponent } from './table-data/table-data.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogComponent } from './dialog/dialog.component';
import {MatCardModule} from '@angular/material/card';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    CitynavcardsComponent,
    DashboardComponent,
    OverviewComponent,
    CompletedprojectsComponent,
    ProjectstatsComponent,
    VersustimeseriesComponent,
    TableComponent,
    AvggroupbyComponent,
    DialogcategoricalComponent,
    DialognumericalComponent,
    ProjectDetailsComponent,
    TableDataComponent,
    DialogComponent,
    DummyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    DateInputsModule,
    NgChartsModule 
  ],
  providers: [MapDataService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
