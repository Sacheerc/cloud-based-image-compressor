import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {
  @Output() selectedFiles = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  onFileSelect($event){
    this.selectedFiles.emit($event);
  }
}
