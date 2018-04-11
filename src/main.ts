import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {$} from 'jquery';
if (environment.production) {
  enableProdMode();
}
// Angular2的启动函数
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
