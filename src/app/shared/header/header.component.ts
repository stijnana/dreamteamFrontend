import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {GlobalComponent} from "../../global-component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  protected readonly GlobalComponent = GlobalComponent;
}
