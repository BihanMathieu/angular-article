import { Component, OnInit, Output } from '@angular/core';
import { Article } from './article.model';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articles: Article[] = [];
  article!: Article;
  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.service.addArticle(new Article(title.value, link.value)).subscribe((data) => this.getArticles());
    title.value= '';
    link.value = '';
    return false;
  }

  getArticles() {
    this.service.getArticles().subscribe((restArticles) => (this.articles = restArticles));
  }

  deleteArticle(id: number) {
    this.service.deleteArticle(id).subscribe((data) => this.getArticles());
  }

  updateArticle(article:Article) {
    this.service.updateArticle(article).subscribe((data) => this.getArticles());
      return false;
  }
}
