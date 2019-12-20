import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  public allNews;
  public selectedNews;
  public filteredData;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().then((res: any) => {
      // res.forEach(element => {
      //   element.publishedAt = moment(element.publishedAt).fromNow();
      // });
      this.allNews = res;
    });
  }

  onSelect(news) {
    this.selectedNews = news;
  }

  updateSearch(searchTerm) {
    if (searchTerm !== 0 && searchTerm !== '' && searchTerm !== null) {
      this.filteredData = this.allNews.filter((item: any) => {
        return (
          item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      });
    } else {
      this.filteredData = '';
    }
  }
}
