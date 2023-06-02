import {Component, Input} from '@angular/core';
import {CourseModel} from "../../model/course.model";

@Component({
  selector: 'app-read-more-card',
  templateUrl: './read-more-card.component.html',
  styleUrls: ['./read-more-card.component.css']
})
export class ReadMoreCardComponent {
  @Input() data: CourseModel;
  columnsToDisplay = ['name', 'description', 'location'];


  isReadMore = true

  loadDetailPage(id : number) {
    this.isReadMore = !this.isReadMore
    let div = document.getElementById('texblock');
    //console.log(this.isEllipsisActive(this.div))
  }




}


