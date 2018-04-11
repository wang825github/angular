import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NewsComponent} from '../news/news.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NewService} from '../news/new.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  // 模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
  declarations: [
    AppComponent,
    NewsComponent
  ],
  // 指定应用程序的根级别需要使用的service
  providers: [
    NewService
  ],
  // bootstrap：通常是app启动的根组件
  bootstrap: [ AppComponent ]
})
export class AppModule { }
