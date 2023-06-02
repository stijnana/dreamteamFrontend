import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Injectable} from '@angular/core';
import {InterestModel} from "../model/interest.model";
import {InterestService} from "../service/interest.service";
import {CategoryService} from "../service/category.service";
import {CategoryModel} from "../model/category.model";
import {GlobalComponent} from "../global-component";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})

@Injectable({
  providedIn: 'root'
})


export class InterestsComponent implements OnInit {
  columnsToDisplay = ['interest-column', 'category-column', 'edit-column', 'delete-column'];

  interests: InterestModel[];
  categories: CategoryModel[];

  constructor(public InterestService: InterestService, public CategoryService: CategoryService) {

  }



  InterestModel = new InterestModel()
  CategoryModel = new CategoryModel()

  ngOnInit() {
    this.refreshInterest()
    this.getCategories();
  }

  // @ViewChild('formId') formId: ElementRef;
  // @ViewChild('formInterest') formInterest: ElementRef;
  // @ViewChild('formCorpId') formCorpId: ElementRef;
  // @ViewChild('formCategory') formCategory: ElementRef;

  fillEdit(edit: InterestModel) {

    this.InterestModel.id = edit.id;
    this.InterestModel.interest = edit.interest;
    this.InterestModel.corpId = edit.corpId;
    this.InterestModel.category = edit.category;
  }

  getCategories(){
    this.CategoryService.getCategories()
      .subscribe(data => {
        console.log(data)
        this.categories = data;
      })
  }

  resetInterest() {
    this.InterestModel = new InterestModel();
  }

  refreshInterest() {
    this.InterestService.getInterestByCorpId(GlobalComponent.CorpId)
      .subscribe(data => {
        console.log(data)
        this.interests = data;
      })
  }

  postInterest() {
    if (this.InterestModel.id == null) {
      this.InterestModel.id = Math.floor(999999999 + Math.random() * 999999999999999)
    }
    this.InterestModel.corpId = GlobalComponent.CorpId;

    this.InterestService.postInterest(this.InterestModel)
      .subscribe(data => {
        console.log(data)
        this.refreshInterest();
      })
    this.resetInterest();

  }

  deleteById(id: number) {
    this.InterestService.deleteById({id: id})
      .subscribe(data => {
        console.log(data)
        this.refreshInterest();
      })
  }
}




