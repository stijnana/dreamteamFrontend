import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {LearningRouteModel} from "../model/learningRoute.model";
import {WishModel} from "../model/wish.model";


@Injectable({
  providedIn: 'root'
})
export class LearningRouteService {
  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }
  getLearningRoutes(): Observable<LearningRouteModel[]> {
    return this.http.get<LearningRouteModel[]>(this.baseURL + 'learning-routes');
  }




  postLearningRoutes(learningRoute: LearningRouteModel): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(learningRoute);
    return this.http.post(this.baseURL + 'learning-routes', body, {'headers': headers})
  }

  deleteById({id}: { id: any }) {
    console.log(id);
    return this.http.delete(this.baseURL + 'learning-routes/' + id)
  }
}
