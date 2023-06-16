import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { InterestsComponent } from './interests/interests.component';
import { WishesComponent } from './wishes/wishes.component';
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { CoursesComponent } from './courses/courses.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import { CategoriesComponent } from './categories/categories.component';
import { LearningroutesControlComponent } from './learningroutes-control/learningroutes-control.component';
import { LearningroutesComponent } from './learningroutes/learningroutes.component';
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CourseDetailsComponent } from './course-details/course-details.component';



@NgModule({
  declarations: [
    AppComponent,
    InterestsComponent,
    WishesComponent,
    CoursesComponent,
    CategoriesComponent,
    LearningroutesControlComponent,
    LearningroutesComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
