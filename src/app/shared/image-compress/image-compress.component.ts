import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ApiService } from 'src/app/services/api.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.css']
})
export class ImageCompressComponent implements OnInit {

  constructor(
    private api: ApiService,
    private fileService: FileService
  ) { }

 

  selectFile() {
    let downloadedFiles = this.fileService.getDownloadedFiles()
    let compressedFiles =[];
    downloadedFiles.forEach(image=>{
      this.api.compressImages(image, 40).subscribe(data => {
        compressedFiles.push(data.image)
        this.fileService.compressedFiles.emit(compressedFiles)
      })
    }) 
  }

 
  ngOnInit() {
  }

}
