import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Injectable} from '@angular/core';
import {InterestModel} from "../model/interest.model";
import {InterestService} from "../service/interest.service";
import {CategoryService} from "../service/category.service";
import {CategoryModel} from "../model/category.model";
import {GlobalComponent} from "../global-component";
import {ConfirmDialogComponent, ConfirmDialogModel} from "../shared/confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
  result: string = '';
  interests: InterestModel[];
  categories: CategoryModel[];

  constructor(public InterestService: InterestService, public CategoryService: CategoryService, public dialog: MatDialog) {

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

  getCategories() {
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
      this.InterestModel.id = Math.floor(100000 + Math.random() * 900000)
    }
    this.InterestModel.corpId = GlobalComponent.CorpId;

    this.InterestService.postInterest(this.InterestModel)
      .subscribe(data => {
        console.log(data)
        this.refreshInterest();
      })
    this.resetInterest();
  }

  deleteById(id: any) {
    this.InterestService.deleteById({id: id})
      .subscribe(data => {
        console.log(data)
        this.refreshInterest();
      })
  }
  confirmDialog(id?: number)  {
    const message = `Weet je het zeker dat je het wil verwijderen?`;

    const dialogData = new ConfirmDialogModel("Bevestig verwijderen", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result) this.deleteById(id);
    });
  }
}




