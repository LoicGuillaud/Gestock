import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LigneStockComponent} from "../entites/ligne-stock/ligne-stock.component";
import {
  ChangementEmplacementPreparationComponent
} from "../entites/changement-emplacement-preparation/changement-emplacement-preparation.component";

@Injectable({
  providedIn: 'root'
})
export class PreparationService {

  constructor(private http: HttpClient) { }

  getListeAServir(of: number){
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.get<LigneStockComponent>("http://localhost:49/preparation/get/" + of, head)
    }else{
      return this.http.get<LigneStockComponent>("http://128.0.0.220:49/preparation/get/"+ of, head)
    }
  }

  postListeAServir(of: number){
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.post<ChangementEmplacementPreparationComponent>("http://localhost:49/preparation/get/" + of, head)
    }else{
      return this.http.post<ChangementEmplacementPreparationComponent>("http://128.0.0.220:49/preparation/get/"+ of, head)
    }
  }
}
