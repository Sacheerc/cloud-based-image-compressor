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
    private imageCompress: NgxImageCompressService,
    private api: ApiService,
    private fileService: FileService
  ) { }

  file: any;
  files = [];
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number;
  sizeOFCompressedImage: number;
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  selectFile() {
    let downloadedFiles = this.fileService.getDownloadedFiles()
    downloadedFiles.forEach(file =>{
      console.log(file)
      let fileName = file.image_details.name;
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log(fileName)
        this.compressFile(this.localUrl, fileName)
      }
      reader.readAsDataURL(file.image);
      })
  }
  // selectFile() {
  //   var fileName: any;
  //   // this.file = event.target.files[0];
  //   fileName ="dawde";
  //   // if (event.target.files && event.target.files[0]) {
  //     this.api.getImage('https://wallpaperaccess.com/full/124518.jpg').subscribe(images => {
  //       // images.forEach(image => {
  //         console.log(images)
  //         var reader = new FileReader();
  //         reader.onload = (event: any) => {
  //           this.localUrl = event.target.result;
  //           this.compressFile(this.localUrl, fileName)
  //         }
  //         reader.readAsDataURL(images);
  //       // });
  //     })
  //   // }
  // }

  compressFile(image, fileName) {
    console.log(fileName)
    var orientation = -1;
    this.sizeOfOriginalImage = this.imageCompress.byteCount(image) / (1024 * 1024);
    console.warn('Size in bytes is now:', this.sizeOfOriginalImage);
    this.imageCompress.compressFile(image, orientation, 50, 50).then(
      result => {
        this.imgResultAfterCompress = result;
        this.localCompressedURl = result;
        this.sizeOFCompressedImage = this.imageCompress.byteCount(result) / (1024 * 1024)
        console.warn('Size in bytes after compression:', this.sizeOFCompressedImage);
        // create file from byte
        const imageName = fileName;
        // call method that creates a blob from dataUri
        const imageBlob = this.dataURItoBlob(this.imgResultAfterCompress.split(',')[1]);
        //imageFile created below is the new compressed file which can be send to API in form data
        const imageFile = new File([result], imageName, { type: 'image/jpeg' });
      });
  }
  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

  ngOnInit() {
  }

}
