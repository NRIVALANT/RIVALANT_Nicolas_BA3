import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IArticle} from '../models/Iarticle';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  private url = 'https://www.eleguen.ovh/api/v1/articles';
  constructor(private http : HttpClient) { }

  getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.url);
  };
}
