import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CourseModel} from "../model/course.model";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {LearningRouteModel} from "../model/learningRoute.model";
import {CourseService} from "../service/course.service";
import {LearningRouteService} from "../service/learningRoute.service";


@Component({
  selector: 'app-learningroutes',
  templateUrl: './learningroutes.component.html',
  styleUrls: ['./learningroutes.component.css']
})
export class LearningroutesComponent implements AfterViewInit, OnInit {
  columnsToDisplay = ['name', 'duration', 'location'];
  LearningRoutes: LearningRouteModel[];
  courses: any = {}

  constructor(
    public CourseService: CourseService,
    private _liveAnnouncer: LiveAnnouncer,
    public LearningRouteService: LearningRouteService,
    private changeDetection: ChangeDetectorRef
  ) {
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
          console.log(courseId)
          this.CourseService.getCoursesById(courseId).subscribe(course => {
            console.log(course)
            route.courses.push(new CourseModel(course));
          });

        });
      });
      this.changeDetection.detectChanges();
      // console.log(this.LearningRoutes)
    });
  }
}
