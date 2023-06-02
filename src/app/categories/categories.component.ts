import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../service/category.service";
import {CategoryModel} from "../model/category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{


  columnsToDisplay = ['category-column', 'delete-column'];


  CategoryModel = new CategoryModel()
  categories: CategoryModel[];

  constructor(public CategoryService: CategoryService) {

  }
  ngOnInit() {
    this.refreshCategory()
  }

  @ViewChild('formId') formId: ElementRef;
  @ViewChild('formCategory') formCategory: ElementRef;


  resetCategory() {
    this.CategoryModel = new CategoryModel();
  }

  refreshCategory() {
    this.CategoryService.getCategories()
      .subscribe(data => {
        console.log(data)
        this.categories = data;
      })
  }

  postCategory() {
    if (this.CategoryModel.id == null) {
      this.CategoryModel.id = Math.floor(100000 + Math.random() * 900000)
    }
    this.CategoryService.postCategories(this.CategoryModel)
      .subscribe(data => {
        console.log(data)
        this.refreshCategory();
      })
    this.refreshCategory();
  }

  deleteById(id: number) {
    this.CategoryService.deleteById({id: id})
      .subscribe(data => {
        console.log(data)
        this.refreshCategory();
      })
  }

}
