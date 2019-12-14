import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';



@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  selectedFiles: any;

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.selectedFiles = this.fileService.getSelectedFiles();
    console.log(this.selectedFiles)
  }


}
