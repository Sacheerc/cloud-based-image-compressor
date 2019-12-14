import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  downloadedFiles: any;
  constructor() { }

  setDownloadedFiles(files){
    this.downloadedFiles = files;
  }

  getDownloadedFiles(){
    return this.downloadedFiles;
  }
}
