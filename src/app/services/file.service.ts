import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FileService {
  @Output() downloadedFiles = [];
  @Output() compressedFiles: EventEmitter<any> = new EventEmitter();
  @Output() isDownloadCompleted: EventEmitter<any> = new EventEmitter();
  selectedFiles = [1, 2, 3, 4];
  constructor() {}

  setDownloadedFiles(files) {
    this.downloadedFiles = files;
  }

  getDownloadedFiles() {
    return this.downloadedFiles;
  }

  setSelectedFiles(files) {
    this.selectedFiles = files;
  }

  getSelectedFiles() {
    return this.selectedFiles;
  }
}
