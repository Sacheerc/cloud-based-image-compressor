import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getImage(urlArray: any[]): Observable<any> {
    let forkArr = [];
    urlArray.forEach(item =>{
      forkArr.push(this.httpClient.get(item, { responseType: 'blob' }))
    })
    return forkJoin(forkArr);
  }
}
