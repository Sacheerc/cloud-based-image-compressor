import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedFiles = [];
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }

  onFileSelect($event) {
    this.selectedFiles = $event
    this.isVisible=true
  }

  test(){
    this.isVisible =!this.isVisible
  }

}
