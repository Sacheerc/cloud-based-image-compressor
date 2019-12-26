import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.css']
})
export class CompressorComponent implements OnInit {
  value = 0;
  url: any;
  refresh = false;
  fileName: String;
  isDownloaded = false;
  isStarted = false;
  isDownloadCompleted = false;
  constructor(private fileService: FileService, private api: ApiService) { }

  ngOnInit() {
    this.url = environment.uri;
    this.fileService.isDownloadCompleted.subscribe(data => {
      this.isDownloadCompleted = data;
    });
    this.fileService.compressedFiles.subscribe(data => {
      this.isStarted = true;
      this.fileName = this.api.tempId
      this.value = data.length / this.fileService.downloadedFiles.length * 100
      if (data.length == this.fileService.downloadedFiles.length) {
        this.api.createZip(data).subscribe(result => {
          console.log(result)
          this.isDownloaded = true;
        })
      }
    })
  }

  downloadZip(){
    this.refresh= true;
    window.location.href = (this.url + '/images/zip/' + this.fileName + '.zip');
  }

  refreshReduzer(){
    window.location.reload();
  }

}
