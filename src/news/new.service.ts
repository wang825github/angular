import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { News} from './news';
import { MessageService } from '../message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewService {
  private  newsUrls = 'api/getNews';
  constructor(
    private  http: HttpClient
  ) {}
  // Observable 和 jquery 里面Promise 有点类似
  // 用来处理异步
 getNews (): Observable<News[]> {
    console.log(' NewService ok ');
  return this.http.get<News[]>(this.newsUrls);
}

}
