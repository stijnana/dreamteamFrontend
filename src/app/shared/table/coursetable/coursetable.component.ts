import {Component, Input} from '@angular/core';
import {CourseModel} from "../../../model/course.model";

@Component({
  selector: 'app-coursetable',
  templateUrl: './coursetable.component.html',
  styleUrls: ['./coursetable.component.css']
})
export class CoursetableComponent {
  @Input() data: CourseModel;
  columnsToDisplay = ['name', 'description', 'location'];

}
