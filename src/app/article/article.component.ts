import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  showForm: boolean = false;

  @Input()
  article: Article;

  @Output()
  currentArticle = new EventEmitter<number>

  @Output()
  update = new EventEmitter<Article>


  constructor(private service:HttpService) {
    this.article = new Article('', '', 0);
  }


  deleteArticle(id:number){
    this.currentArticle.emit(id)
  }

  voteUp() {
    this.article.votes++;
  }

  voteDown() {
    this.article.votes--;
  }

  updateArticle(article:Article,updateTitle:HTMLInputElement,updateLink:HTMLInputElement){
  article.title = updateTitle.value
  article.link = updateLink.value
  this.update.emit(article)
  return false
 }
  

}
