import {Component, Input} from '@angular/core';
import {CourseModel} from "../../model/course.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-read-more-card',
  templateUrl: './read-more-card.component.html',
  styleUrls: ['./read-more-card.component.css']
})
export class ReadMoreCardComponent {
  @Input() data: CourseModel;
  columnsToDisplay = ['name', 'description', 'location'];
  constructor(private router: Router) {
  }

  isReadMore = true

  loadDetailPage(id : any) {
    this.router.navigate(['/course-details', id]);
    this.isReadMore = !this.isReadMore
    let div = document.getElementById('texblock');
    //console.log(this.isEllipsisActive(this.div))
  }




}


