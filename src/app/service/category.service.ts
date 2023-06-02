import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {CategoryModel} from "../model/category.model";
import {ConfigService} from '../config/config.service';
import {InterestModel} from "../model/interest.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }
  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.baseURL + 'categories');
  }

  postCategories(category: CategoryModel): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(category);
    console.log(body)
    return this.http.post(this.baseURL + 'categories', body, {'headers': headers})
  }

  deleteById({id}: { id: any }) {
    console.log(id);
    return this.http.delete(this.baseURL + 'categories/' + id)
  }
}
