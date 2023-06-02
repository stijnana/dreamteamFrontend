import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CourseModel} from "../model/course.model";
import {LearningRouteModel} from "../model/learningRoute.model";
import {CourseService} from "../service/course.service";
import {LearningRouteService} from "../service/learningRoute.service";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";


@Component({
  selector: 'app-learningroutes-control',
  templateUrl: './learningroutes-control.component.html',
  styleUrls: ['./learningroutes-control.component.css']
})
export class LearningroutesControlComponent implements OnInit, AfterViewInit {
  courses: CourseModel[];
  columnsToDisplay = ['select', 'name', 'category'];
  dataSource: MatTableDataSource<CourseModel>;
  selection = new SelectionModel<CourseModel>(true, []);
  LearningRouteModel = new LearningRouteModel
  LearningRoutes: LearningRouteModel[]
  tempStoreArray: any = []


  constructor(public CourseService: CourseService,
              private _liveAnnouncer: LiveAnnouncer,
              public LearningRouteService: LearningRouteService,
              private changeDetection: ChangeDetectorRef
              ) {
  }


  ngOnInit() {
    this.refreshCourse();
    this.refreshLearningRoute();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {

  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce(`Sorting cleared`);
    }
  }

  refreshCourse() {
    this.CourseService.getCourses()
      .subscribe(data => {
        this.courses = data;
        // console.log(data)
        this.dataSource = new MatTableDataSource(this.courses);
        this.dataSource.sort = this.sort;
      })
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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    if (this.dataSource) {
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
    return false;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: CourseModel): string {

    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  postLearningRoute() {
    if (this.LearningRouteModel.id == null) {
      this.LearningRouteModel.id = Math.floor(999999999 + Math.random() * 999999999999999)
    }
    let coursesArray: number[] = []
    this.selection.selected.forEach(courses => {
      coursesArray.push(courses.id)
    });



    this.LearningRouteModel.courses_id = coursesArray;
    this.LearningRouteModel.length = coursesArray.length - 1;
    this.LearningRouteService.postLearningRoutes(this.LearningRouteModel)
      .subscribe(data => {
        // console.log(data)
        this.refreshCourse();
        coursesArray = [];
      })

  }
}
