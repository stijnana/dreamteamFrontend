import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {WishModel} from '../model/wish.model';

import {ConfigService} from '../config/config.service';
import {InterestModel} from "../model/interest.model";
import {GlobalComponent} from "../global-component";

@Injectable({
  providedIn: 'root'
})
export class WishService {
  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }


  getWish(): Observable<WishModel[]> {
    return this.http.get<WishModel[]>(this.baseURL + 'wishes');
  }

  getWishByCorpId(corpId: string): Observable<WishModel[]> {
    return this.http.get<WishModel[]>(this.baseURL + 'wishes/corpid/' + corpId);

  }


  postWish(wish: WishModel): Observable<any> {
    const headers = {'content-type': 'application/json'}
    wish.corpId = GlobalComponent.CorpId

    const body = JSON.stringify(wish);
    console.log(body)
    return this.http.post(this.baseURL + 'wishes', body, {'headers': headers})
  }

  deleteById({id}: { id: any }) {
    console.log(id);
    return this.http.delete(this.baseURL + 'wishes/' + id)
  }

}
