import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FileService } from 'src/app/services/file.service';



@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  @Input() selectedFiles;

  ngOnInit() {
    console.log(this.selectedFiles)
  }



}
