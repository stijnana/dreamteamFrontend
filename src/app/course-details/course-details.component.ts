import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../model/course.model";
import {CourseService} from "../service/course.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  constructor(private router: Router, private courseService: CourseService){}
  courses: CourseModel[];



  ngOnInit() {

    this.getCourseById();
  }

  getCourseById(){
    let id :any = this.router.url.split("/")[2]
    this.courseService.getCoursesById(id)
      .subscribe(data => {
        console.log(data)
        this.courses = data;
      })
  }
}
