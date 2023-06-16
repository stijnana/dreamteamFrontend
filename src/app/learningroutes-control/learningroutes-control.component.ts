import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CourseModel} from "../model/course.model";
import {LearningRouteModel} from "../model/learningRoute.model";
import {CourseService} from "../service/course.service";
import {LearningRouteService} from "../service/learningRoute.service";
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";
import {ConfirmDialogComponent, ConfirmDialogModel} from "../shared/confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-learningroutes-control',
  templateUrl: './learningroutes-control.component.html',
  styleUrls: ['./learningroutes-control.component.css']
})
export class LearningroutesControlComponent implements OnInit, AfterViewInit {
  columnsToDisplay = ['select', 'name', 'category'];
  columnsToDisplay2 = ['name', 'duration', 'location'];
  dataSource: MatTableDataSource<CourseModel>;
  selection = new SelectionModel<CourseModel>(true, []);
  LearningRouteModel = new LearningRouteModel
  LearningRoutes: LearningRouteModel[]
  tempStoreArray: any = []
  courses: any = {}

  constructor(
    public CourseService: CourseService,
    private _liveAnnouncer: LiveAnnouncer,
    public LearningRouteService: LearningRouteService,
    private changeDetection: ChangeDetectorRef,
    public dialog: MatDialog
  ) {
  }


  ngOnInit() {
    this.refreshCourse();
    this.refreshLearningRoute();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {

  }
  deleteLearningRoute(id: any) {
    this.LearningRouteService.deleteById({id: id})
      .subscribe(data => {
        this.refreshLearningRoute();
      })
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
      // console.log(this.LearningRoutes)
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

  resetLearningroute() {
    this.LearningRouteModel = new LearningRouteModel();
  }

  checkboxLabel(row?: CourseModel): string {

    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  postLearningRoute() {
    if (this.LearningRouteModel.id == null) {
      this.LearningRouteModel.id = Math.floor(100000 + Math.random() * 900000)
    }
    let coursesArray: any[] = []
    this.selection.selected.forEach(courses => {
      coursesArray.push(courses.id)
    });

    this.LearningRouteModel.courses_id = coursesArray;
    this.LearningRouteModel.length = coursesArray.length - 1;
    this.LearningRouteService.postLearningRoutes(this.LearningRouteModel)
      .subscribe(data => {
        coursesArray = [];
        this.refreshLearningRoute();
        this.resetLearningroute();
        this.selection.clear();
      })
  }

  result: string = '';
  confirmDialog(id?: number)  {
    const message = `Weet je het zeker dat je het wil verwijderen?`;

    const dialogData = new ConfirmDialogModel("Bevestig verwijderen", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) this.deleteLearningRoute(id);
    });
  }
}
