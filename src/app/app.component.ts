import {Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient) {}
    ngOnInit() { console.log('ok');
      const req  = this.http.get('/api/2', {responseType: 'json'}).toPromise().then(res => console.log(res));
      // console.log(req.subscribe());
  }

}
