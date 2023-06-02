import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {CourseModel} from '../model/course.model';

import {ConfigService} from '../config/config.service';
import {WishModel} from "../model/wish.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }


  getCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.baseURL + 'courses');
  }

  getCoursesById(id: any): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(this.baseURL + 'courses/' + id);
  }
  postCourses(course: CourseModel): Observable<any> {
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(course);
    console.log(body)
    return this.http.post(this.baseURL + 'courses', body, {'headers': headers})
  }
  deleteById({id}: { id: any }) {
    console.log(id);
    return this.http.delete(this.baseURL + 'courses/' + id)
  }
}
