import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { FileService } from "src/app/services/file.service";

export interface Image {
  id: string;
  mimeType: string;
  name: string;
  size: number;
  status: string;
  imgUrl: string;
}

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"],
})
export class FileListComponent implements OnInit {
  constructor(private api: ApiService, private fileService: FileService) {}
  @Input() selectedFiles;
  imageArr: Image[] = [];
  downloadedFiles = [];
  value = 0;
  isDownloaded = false;

  ngOnInit() {
    this.downloadedFiles = [];
    this.selectedFiles.forEach((element) => {
      this.imageArr.push({
        id: element.id,
        mimeType: element.mimeType,
        name: element.name,
        size: element.sizeBytes,
        status: "processing",
        imgUrl: element.url,
      });
    });

    this.imageArr.forEach((image) => {
      this.api.getImagesLocallyParallely(image.id).subscribe(
        (resultImage) => {
          image.status = "done";
          this.downloadedFiles.push({
            image_details: image,
            image: resultImage,
          });
          this.fileService.setDownloadedFiles(this.downloadedFiles);
          this.value =
            (this.downloadedFiles.length / this.imageArr.length) * 100;
          if (this.value == 100) {
            this.isDownloaded = true;
            this.fileService.isDownloadCompleted.emit(true);
          }
        },
        (error) => {
          image.status = "failed";
        }
      );
    });
  }
}
