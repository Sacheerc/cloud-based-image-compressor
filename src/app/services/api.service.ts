import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  accessToken: String;
  constructor(private httpClient: HttpClient) { }
  
  getImage(id): Observable<any> {
    let headers= new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    })
    let url = 'https://www.googleapis.com/drive/v2/files/' + id + '?alt=media'
    return this.httpClient.get(url, { headers: headers, responseType:'blob' })
  }
}
