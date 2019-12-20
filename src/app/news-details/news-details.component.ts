import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.scss"]
})
export class NewsDetailsComponent implements OnInit {
  @Input() news;
  private newsImg;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.getNewsDetails();
  }

  getNewsDetails() {
    const title = this.route.snapshot.paramMap.get('title');
    this.newsService.getNewsDetails(title).subscribe(news => this.news = news);
  }
}
