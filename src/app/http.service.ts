import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client:HttpClient) { }

  getArticles():Observable<Article[]>{
    return this.client.get<Article[]>('http://localhost:3000/articles')
  }

  addArticle(article:Article):Observable<Article[]>{
    return this.client.post<Article[]>('http://localhost:3000/articles', article)
  }

  deleteArticle(id:number):Observable<Article>{
    return this.client.delete<Article>('http://localhost:3000/articles/'+id)
  }

  updateArticle(article:Article):Observable<Article>{
    return this.client.put<Article>('http://localhost:3000/articles/'+article.id, article)
  }
}
