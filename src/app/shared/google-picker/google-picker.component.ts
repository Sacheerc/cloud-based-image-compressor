import { Component, OnInit } from '@angular/core';
import { keys } from '../../../keys'
import { FileService } from 'src/app/services/file.service';
declare var gapi: any;
declare var google: any;

@Component({
  selector: 'app-google-picker',
  templateUrl: './google-picker.component.html',
  styleUrls: ['./google-picker.component.css']
})
export class GooglePickerComponent{
  constructor(private fileService: FileService) { }
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
                  // src = doc[google.picker.Document.URL];
                  this.fileService.setSelectedFiles(docs);
                  console.log(this.fileService.getSelectedFiles())
                  
                  // this.fileService.setSelectedFiles(docs)
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

  handleAuthResult(authResult) {
    
  }

}
