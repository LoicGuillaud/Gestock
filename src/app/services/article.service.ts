import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ArticleComponent} from "../entites/article/article.component";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getInfosArticle(codeArtLot: String){
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.get<ArticleComponent>("http://localhost:49/listeArticle/get/" + codeArtLot, head)
    }else{
      return this.http.get<ArticleComponent>("http://128.0.0.220:49/listeArticle/get/" + codeArtLot, head)
    }

  }
}
