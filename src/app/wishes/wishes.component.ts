import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Injectable} from '@angular/core';
import {WishModel} from "../model/wish.model";
import {WishService} from "../service/wish.service";

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class WishesComponent implements OnInit {
  columnsToDisplay = ['wish-column','edit-column','delete-column'];

  wishes: WishModel[];

  constructor(public WishService: WishService) {

  }

  WishModel = new WishModel()

  ngOnInit() {
    this.refreshWish()
  }

  @ViewChild('formId') formId: ElementRef;
  @ViewChild('formWish') formWish: ElementRef;
  @ViewChild('formUserId') formUserId: ElementRef;
  fillEdit(edit: WishModel) {
    this.WishModel.id = edit.id;
    this.WishModel.wish = edit.wish;
    this.WishModel.corpId = edit.corpId;
  }

  resetWish() {
    this.WishModel = new WishModel();
  }

  refreshWish() {
    this.WishService.getWish()
      .subscribe(data => {
        console.log(data)
        this.wishes = data;
      })
  }

  postWish() {
    if (this.WishModel.id == null) {
      this.WishModel.id = Math.floor(100000 + Math.random() * 900000)
    }
    this.WishService.postWish(this.WishModel)
      .subscribe(data => {
        console.log(data)
        this.refreshWish();
      })
    this.resetWish();
  }

  deleteById(id: number) {
    this.WishService.deleteById({id: id})
      .subscribe(data => {
        console.log(data)
        this.refreshWish();
      })
  }
}
