import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { reject } from 'q';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public allNews = [];

  constructor(private http:HttpClient) { }

  getNews() {
    return new Promise((resolve,reject) => {
      this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8b83bf223a1c4609bc209b5d19c258b7').subscribe( (data: any) => {
        const articles = data.articles;
        articles.forEach(element => {
          this.allNews.push(element);
        });
        resolve(data.articles);
      });
    });
  }

  getNewsDetails(title: string) {
    this.getNews();
    return of(this.allNews.find(news => news.title === title));
  }
}

