import { Component, OnInit } from "@angular/core";
import * as JSZip from "jszip";
import { NgxImageCompressService } from "ngx-image-compress";
import { ApiService } from "src/app/services/api.service";
import { FileService } from "src/app/services/file.service";
import { saveAs } from "file-saver";

@Component({
  selector: "app-image-compress",
  templateUrl: "./image-compress.component.html",
  styleUrls: ["./image-compress.component.css"],
})
export class ImageCompressComponent implements OnInit {
  file: any;
  localUrl: any;
  localCompressedURl: any;
  sizeOfOriginalImage: number;
  sizeOFCompressedImage: number;
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;
  compressedImages: any[] = [];
  downloadedFiles: any[] = [];

  constructor(
    private api: ApiService,
    private fileService: FileService,
    private imageCompress: NgxImageCompressService
  ) {}

  selectFile() {
    this.downloadedFiles = this.fileService.getDownloadedFiles();
    let compressedFiles = [];
    this.downloadedFiles.forEach((image) => {
      this.api.compressImages(image, 40).subscribe((data) => {
        compressedFiles.push(data.image);
        this.fileService.compressedFiles.emit(compressedFiles);
      });
    });
  }

  selectFileLocallyUploaded(event: any) {
    var fileName: any;
    this.file = event.target.files[0];
    fileName = this.file["name"];
    if (event.target.files && event.target.files[0]) {
      this.api
        .getImagesLocally([
          "https://wallpaperaccess.com/full/124518.jpg",
          "https://wallpaperaccess.com/full/212205.jpg",
        ])
        .subscribe((images) => {
          images.forEach((image) => {
            var reader = new FileReader();
            reader.onload = (event: any) => {
              this.localUrl = event.target.result;
              this.compressFile(this.localUrl, fileName);
            };
            reader.readAsDataURL(image);
          });
        });
    }
  }

  selectFileLocally() {
    let downloadedFiles = this.fileService.getDownloadedFiles();
    downloadedFiles.forEach((file) => {
      let fileName = file.image_details.name;
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log(this.localUrl);
        this.compressFile(this.localUrl, fileName);
      };
      reader.readAsDataURL(file.image);
    });
  }

  compressFile(image, fileName) {
    var orientation = -1;
    this.sizeOfOriginalImage =
      this.imageCompress.byteCount(image) / (1024 * 1024);
    console.warn("Size in bytes is now:", this.sizeOfOriginalImage);
    this.imageCompress
      .compressFile(image, orientation, 50, 50)
      .then((result) => {
        this.imgResultAfterCompress = result;
        this.localCompressedURl = result;
        this.sizeOFCompressedImage =
          this.imageCompress.byteCount(result) / (1024 * 1024);
        console.warn(
          "Size in bytes after compression:",
          this.sizeOFCompressedImage
        );
        // create file from byte
        const imageName = fileName;
        // call method that creates a blob from dataUri
        const imageBlob = this.dataURItoBlob(
          this.imgResultAfterCompress.split(",")[1]
        );
        this.compressedImages.push({ image: imageBlob, name: imageName });
      });
  }

  download = async () => {
    const zip = new JSZip();
    this.compressedImages.forEach((obj) => {
      zip.file(obj.name + ".jpg", obj.image, { base64: true });
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "compressed.zip");
    });
  };

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: "image/jpeg" });
    return blob;
  }

  ngOnInit() {
    this.downloadedFiles = this.fileService.getDownloadedFiles();
  }
}
