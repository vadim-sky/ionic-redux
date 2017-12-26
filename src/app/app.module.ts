import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../model/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SystemProvider } from '../providers/system/system';
import { EffectsModule } from '@ngrx/effects';
import { SystemEffects } from '../model/system/SystemEffects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TabsPage} from "../pages/tabs/tabs";
import {ProductsPage} from "../pages/products/products";
import {SettingsPage} from "../pages/settings/settings";
import { SettingsProvider } from '../providers/settings/settings';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ProductsPage,
    SettingsPage,
    WelcomePage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),


    /* REDUX */
    StoreModule.forRoot(appReducers),

    // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
    StoreDevtoolsModule.instrument({ maxAge: 25 }),

    /*  MIDDLEWARE  (effects) */
    EffectsModule.forRoot([
      SystemEffects
    ])

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WelcomePage,
    HomePage,
    ProductsPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SystemProvider,
    SettingsProvider
  ]
})
export class AppModule {}
