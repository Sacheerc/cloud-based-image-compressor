import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { keys } from '../../../keys'
import { FileService } from 'src/app/services/file.service';
import { FileListComponent } from 'src/app/modules/home/components/file-list/file-list.component';
import { ApiService } from 'src/app/services/api.service';
declare var gapi: any;
declare var google: any;

@Component({
  selector: 'app-google-picker',
  templateUrl: './google-picker.component.html',
  styleUrls: ['./google-picker.component.css']
})
export class GooglePickerComponent{
  @Output() selectedFiles = new EventEmitter<any>();

  constructor(private fileService: FileService, private api:ApiService) { }
  developerKey = keys.ApiKey;
  clientId = keys.ClientId
  scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/drive'//insert scope here
  ].join(' ');
  pickerApiLoaded = false;
  oauthToken?: any;


  loadGoogleDrive() {
    gapi.load('auth', { 'callback': this.onAuthApiLoad.bind(this) });
    gapi.load('picker', { 'callback': this.onPickerApiLoad.bind(this) });
  }

  onAuthApiLoad() {
    gapi.auth.authorize(
      {
        'client_id': this.clientId,
        'scope': this.scope,
        'immediate': false
      },
      (authResult)=>{
        let src
        if (authResult && !authResult.error) {
          if (authResult.access_token) {
            console.log(authResult)
            this.api.accessToken = authResult.access_token;
            let view = new google.picker.View(google.picker.ViewId.DOCS);
            view.setMimeTypes("application/vnd.google-apps.folder,image/png,image/jpeg,image/jpg,video/mp4");
            let pickerBuilder = new google.picker.PickerBuilder();
            let picker = pickerBuilder.
              enableFeature(google.picker.Feature.SUPPORT_DRIVES).
              enableFeature(google.picker.Feature.MULTISELECT_ENABLED).
              setOAuthToken(authResult.access_token).
              addView(view).
              addView(new google.picker.DocsUploadView()).
              setCallback((e) => {
                if (e[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                  let docs = e[google.picker.Response.DOCUMENTS];
                  this.fileService.setSelectedFiles(docs);
                  console.log(this.fileService.getSelectedFiles())
                  this.selectedFiles.emit(docs)
                }
              }).
              build();
            picker.setVisible(true);
          }
        }
      });
  }

  onPickerApiLoad() {
    this.pickerApiLoaded = true;
  }


}
