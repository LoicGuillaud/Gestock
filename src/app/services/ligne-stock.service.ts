import { Injectable } from '@angular/core';
import {ChangementEmplacementComponent} from "../entites/changement-emplacement/changement-emplacement.component";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LigneStockComponent} from "../entites/ligne-stock/ligne-stock.component";

@Injectable({
  providedIn: 'root'
})
export class LigneStockService {

  constructor(private http: HttpClient) { }

  verifierStockArticle(codeArtLot: String, emplacement: String): Observable<LigneStockComponent>{
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.get<LigneStockComponent>("http://localhost:49/lignestock/get/" + codeArtLot + "/" + emplacement, head)
    }else{
      return this.http.get<LigneStockComponent>("http://128.0.0.220:49/lignestock/get/"+ codeArtLot + "/" + emplacement, head)
    }
  }

  getStockArticle(codeArtLot: String){
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.get<LigneStockComponent>("http://localhost:49/lignestock/get/" + codeArtLot, head)
    }else{
      return this.http.get<LigneStockComponent>("http://128.0.0.220:49/lignestock/get/"+ codeArtLot, head)
    }
  }

}
