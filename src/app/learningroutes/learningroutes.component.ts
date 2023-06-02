import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CourseModel} from "../model/course.model";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {LearningRouteModel} from "../model/learningRoute.model";
import {CourseService} from "../service/course.service";
import {LearningRouteService} from "../service/learningRoute.service";


@Component({
  selector: 'app-learningroutes',
  templateUrl: './learningroutes.component.html',
  styleUrls: ['./learningroutes.component.css']
})
export class LearningroutesComponent implements AfterViewInit, OnInit {
  columnsToDisplay = ['name', 'description', 'location'];
  LearningRoutes: LearningRouteModel[];
  courses: any = {}

  constructor(
    public CourseService: CourseService,
    private _liveAnnouncer: LiveAnnouncer,
    public LearningRouteService: LearningRouteService,
    private changeDetection: ChangeDetectorRef
  ) {
  }

  calcLength(length: number) {
    console.log(length -1)
    return length -1;
  }

  ngOnInit() {
    this.refreshLearningRoute();

  }

  ngAfterViewInit() {

  }


  refreshLearningRoute() {
    this.LearningRouteService.getLearningRoutes().subscribe(data => {
      this.LearningRoutes = data.map(learningRoute => new LearningRouteModel(learningRoute));
      this.LearningRoutes.forEach(route => {
        route.courses = [];
        route.courses_id.forEach(courseId => {
          this.CourseService.getCoursesById(courseId).subscribe(course => {
            route.courses.push(new CourseModel(course));
          });
        });
      });
      this.changeDetection.detectChanges();
      console.log(this.LearningRoutes)
    });
  }
}
