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


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GooglePickerComponent,
    ImageCompressComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [
    NgxImageCompressService,
    ApiService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
