import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import { NewsRss } from '../../../app/news-rss';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  RssData: NewsRss;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://gadgets.ndtv.com/rss/feeds", requestOptions)
      .subscribe(data => {
        const parseString = xml2js.parseString;
        console.log(parseString);
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
}
