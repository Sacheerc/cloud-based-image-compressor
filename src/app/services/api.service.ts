import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
const downloadurl = environment.uri +"/files/download";
const zipurl = environment.uri + "/files/zip";
const fileurl = environment.uri + "/files";
const compressurl = environment.uri + "/files/compress";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  accessToken: String;
  tempId: String;
  constructor(private httpClient: HttpClient) { }

  getImage(id, name): Observable<any> {
    let data = {
      id: id,
      dir: this.tempId,
      name: name,
      token: this.accessToken
    }
    return this.httpClient.post(downloadurl, data, httpOptions)
  }

  compressImages(image, quality): Observable<any> {
    let data = {
      image: image,
      quality: quality,
      dir: this.tempId,
    }
    return this.httpClient.post(compressurl, data, httpOptions)
  }

  createZip(images): Observable<any> {
    let data = {
      images: images,
      dir: this.tempId,
    }
    return this.httpClient.post(zipurl, data, httpOptions)
  }

  getFile(): Observable<any> {
    return this.httpClient.get(fileurl)
  }
}
