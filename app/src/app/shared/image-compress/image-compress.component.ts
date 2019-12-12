import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.css']
})
export class ImageCompressComponent implements OnInit {

  constructor(private imageCompress: NgxImageCompressService, private api: ApiService) { }

  file: any;
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number;
  sizeOFCompressedImage: number;
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  selectFile(event: any) {
    var fileName: any;
    this.file = event.target.files[0];
    fileName = this.file['name'];
    if (event.target.files && event.target.files[0]) {
      this.api.getImage(['https://wallpaperaccess.com/full/124518.jpg','https://wallpaperaccess.com/full/212205.jpg']).subscribe(images => {
        images.forEach(image => {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.localUrl = event.target.result;
            this.compressFile(this.localUrl, fileName)
          }
          reader.readAsDataURL(image);
        });
      })
    }
  }

  compressFile(image, fileName) {
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
