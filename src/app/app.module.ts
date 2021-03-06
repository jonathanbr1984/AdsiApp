import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VistasPage } from "../pages/vistas/vistas";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
* Sevices
 */
import { PostService } from '../pages/home/post.service';

/*
* Components
*/
import { PostCreateComponent } from '../pages/post-create/post-create';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VistasPage,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    VistasPage,
    PostCreateComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
