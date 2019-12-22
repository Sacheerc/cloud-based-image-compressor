import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-compressor',
  templateUrl: './compressor.component.html',
  styleUrls: ['./compressor.component.css']
})
export class CompressorComponent implements OnInit {

  constructor(private fileService:FileService, private api:ApiService) { }

  ngOnInit() {
    this.fileService.compressedFiles.subscribe(data =>{
      if(data.length == this.fileService.downloadedFiles.length){
        this.api.createZip(data).subscribe(result=>{
          console.log(result)
        })
      }
    })
  }

}
