import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class ConfigService {
  static baseUrl: string = 'http://localhost:8080';
}
