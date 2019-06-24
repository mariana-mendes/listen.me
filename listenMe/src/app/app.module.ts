import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { InvalidDataModalComponent } from './invalid-data-modal/invalid-data-modal.component'


import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PipesModule } from './pipes/pipes.module';

import { HTTP } from '@ionic-native/http/ngx';
import { ComponentsModule } from './components/components.module';
import { VideoListComponent } from './components/video-list/video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    InvalidDataModalComponent
  ],
  entryComponents: [
    InvalidDataModalComponent,
    VideoListComponent,
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, HttpClientModule, HttpModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
