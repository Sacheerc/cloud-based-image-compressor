import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './modules/home/home.component';
import { GooglePickerComponent } from './shared/google-picker/google-picker.component'
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImageCompressComponent } from './shared/image-compress/image-compress.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { FileService } from './services/file.service';
import { FileListComponent } from './modules/home/components/file-list/file-list.component';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddFilesComponent } from './modules/home/components/add-files/add-files.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GooglePickerComponent,
    ImageCompressComponent,
    FileListComponent,
    AddFilesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  providers: [
    NgxImageCompressService,
    ApiService,
    FileService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
