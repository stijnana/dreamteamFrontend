import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Injectable} from '@angular/core';
import {CourseModel} from "../model/course.model";
import {CourseService} from "../service/course.service";
import {CategoryService} from "../service/category.service";
import {CategoryModel} from "../model/category.model";
import {GlobalComponent} from "../global-component";
import {InterestModel} from "../model/interest.model";
import {InterestService} from "../service/interest.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CoursesComponent implements OnInit {
  course: CourseModel[];
  categories: CategoryModel[];
  interests: InterestModel[];
  filteredCategory: string[];

  constructor(public CourseService: CourseService, public CategoryService: CategoryService, public InterestService: InterestService) {
  }

  ngOnInit() {
    this.refreshCourse()
    this.getCategories();
    this.filteredCategory = [];
  }


  refreshCourse() {
    this.CourseService.getCourses()
      .subscribe(data => {
        this.course = data;

      })
  }

  filterClick(filter: string) {
    this.filteredCategory = [];
    if (filter == "Alles") {
      this.filteredCategory = this.categories.map(category => category.category);
      this.refreshCourse();
      console.log(this.filteredCategory)
    }

    this.filteredCategory.push(filter);
    console.log(this.filteredCategory)

    this.refreshCourse();

  }

  getCategories() {

    this.CategoryService.getCategories()
      .subscribe(data => {
        this.categories = data;
        this.filteredCategory = this.categories.map(category => category.category);

        this.refreshCourse();
      })
  }

  filterOnIntrests() {
    this.InterestService.getInterestByCorpId(GlobalComponent.CorpId)
      .subscribe(data => {
        console.log(data)
        this.filteredCategory = data.map(interest => interest.category);
      })
  }

  protected readonly onclick = onclick;
}
