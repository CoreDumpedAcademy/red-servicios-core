import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(), 
        AppRoutingModule, 
        HttpClientModule, 
        IonicStorageModule.forRoot(),
        HttpModule
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AppComponent,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        ImagePicker,
        Crop, 
        FileTransfer
    ]
   
})
export class AppModule {
}
