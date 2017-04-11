import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  ChartModule, SplitButtonModule, MenuModule, PanelModule, DataTableModule,
  RadioButtonModule, FieldsetModule, SliderModule, ListboxModule, SpinnerModule, InputTextModule,
  InputMaskModule, ButtonModule, EditorModule, CalendarModule, RatingModule, MultiSelectModule,
  ChipsModule, TabViewModule, DropdownModule, ContextMenuModule, DialogModule, StepsModule, GMapModule, DataGridModule,
  ScheduleModule, TreeModule, TooltipModule, ConfirmDialogModule, ConfirmationService, GrowlModule, GalleriaModule,
  DragDropModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { DataService } from './data.service';
import { ProjectsComponent } from './projects/projects.component';

import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { AlltimesComponent } from './alltimes/alltimes.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "alltimes", component: AlltimesComponent },
  { path: "mytimes", component: TimesheetComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "profile", component: ProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    FielderrorsComponent,
    AlltimesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ButtonModule,
    EditorModule,
    InputMaskModule,
    InputTextModule,
    SplitButtonModule,
    MenuModule,
    PanelModule,
    ChartModule,
    CalendarModule,
    RatingModule,
    MultiSelectModule,
    ChipsModule,
    DataTableModule,
    TabViewModule,
    RadioButtonModule,
    FieldsetModule,
    SliderModule,
    ListboxModule,
    SpinnerModule,
    DropdownModule,
    ContextMenuModule,
    DialogModule,
    StepsModule,
    GMapModule,
    DataGridModule,
    ScheduleModule,
    TreeModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    GalleriaModule,
    DragDropModule
  ],
  providers: [ DataService,ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
