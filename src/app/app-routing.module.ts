import {WishesComponent} from "./wishes/wishes.component";
import {InterestsComponent} from "./interests/interests.component";

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CoursesComponent} from "./courses/courses.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {CategoriesComponent} from "./categories/categories.component";
import {LearningroutesComponent} from "./learningroutes/learningroutes.component";
import {LearningroutesControlComponent} from "./learningroutes-control/learningroutes-control.component";

const routes: Routes = [
  { path: 'interests', component: InterestsComponent },
  { path: 'wishes', component: WishesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'learningroutes', component: LearningroutesComponent},
  { path: 'learningroutes-control', component: LearningroutesControlComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
