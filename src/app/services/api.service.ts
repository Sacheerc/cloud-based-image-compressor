import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
const downloadurl = "http://localhost:3000/files/download";
const zipurl = "http://localhost:3000/files/zip";
const fileurl = "http://localhost:3000/files";
const compressurl = "http://localhost:3000/files/compress";
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
