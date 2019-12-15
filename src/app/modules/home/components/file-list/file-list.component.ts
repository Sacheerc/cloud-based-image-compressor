import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export interface Image{
  url: String;
  mimeType: String;
  name: String;
  size: number;
  status:String;
}

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  constructor(private api : ApiService){}
  @Input() selectedFiles;
  imageArr:Image[] =[]
  test="mata baaaa"

  ngOnInit() {
    this.selectedFiles.forEach(element => {
      this.imageArr.push(
        {
          url:element.url, 
          mimeType:element.mimeType, 
          name:element.name, 
          size:element.sizeBytes,
          status:"processing"
        }
      )
    });
    this.imageArr.forEach(image => {
      console.log(image)
      this.api.getImage(image.url).subscribe(resultImage =>{
        image.status ="done";
      },error =>{
        image.status = "failed";
      })
    })
    console.log(this.imageArr)
  }



}
