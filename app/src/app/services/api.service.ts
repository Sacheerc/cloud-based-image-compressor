import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getImage(imgUrl): Observable<any> {
    return this.httpClient.get(imgUrl, { responseType: 'blob' })
  }
}
