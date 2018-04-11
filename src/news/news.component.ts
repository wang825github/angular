///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';

import { News } from './news';
import {NewService} from './new.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];
  constructor(private  newService: NewService,
              private  http: HttpClient) { }
  ngOnInit(): void {
    this.getNews();
  }
  getNews(): void {
    this.newService.getNews().subscribe(news => this.news = news);
       // this.http.get('http://localhost:4201/api/2 ').subscribe((res: Response) => r=es.json());
       // this.http.get('api/2 ');
    // this.http
    //   .request(
    //     'GET',
    //     'https://npmsearch.com/query',
    //     {
    //       responseType: 'json'
    //     }).map((data: any) => {console.log(data); });

    // let resR ;
    // this.http.get('../api/2 ').subscribe((res: Response) => resR = res.json());
    // console.log(resR);
    // Call map on the response observable to get the parsed people object
    //   .map(res => res.json());
    // console.log(this.http.get('/api/2'));
    // this.newService.getNews().subscribe(news => this.news = news);
    // this.news = new News(1, ' 1', '2');
  }
}
