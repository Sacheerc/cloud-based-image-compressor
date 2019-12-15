import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  downloadedFiles= [];
  selectedFiles=[1,2,3,4];
  constructor() { }

  setDownloadedFiles(files){
    this.downloadedFiles = files;
  }

  getDownloadedFiles(){
    return this.downloadedFiles;
  }

  setSelectedFiles(files) {
    this.selectedFiles = files;
  }

  getSelectedFiles() {
    return this.selectedFiles;
  }


}
