import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {InterestModel} from '../model/interest.model';
import {CategoryModel} from "../model/category.model";

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }


  getInterests(): Observable<InterestModel[]> {
    return this.http.get<InterestModel[]>(this.baseURL + 'interests');
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.baseURL + 'categorys');
  }

  postInterest(interest: InterestModel): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(interest);
    console.log(body)
    return this.http.post(this.baseURL + 'interests', body, {'headers': headers})
  }

  getInterestByCorpId(corpId: string): Observable<InterestModel[]> {
    return this.http.get<InterestModel[]>(this.baseURL + 'interests/corpid/' + corpId);

  }

  deleteById({id}: { id: any }) {
    console.log(id);
    return this.http.delete(this.baseURL + 'interests/' + id)
  }

}
