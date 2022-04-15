import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TransfertStockComponent} from "../entites/transfert-stock/transfert-stock.component";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ChangementEmplacementComponent} from "../entites/changement-emplacement/changement-emplacement.component";

@Injectable({
  providedIn: 'root'
})
export class ChangementEmplacementService {

  dataUser: any;
  user: string;

  constructor(private http: HttpClient) {
    this.dataUser = localStorage.getItem("user")
    this.user = JSON.parse(this.dataUser)
  }

  changerEmplacement(changementEmplacement: ChangementEmplacementComponent): Observable<ChangementEmplacementComponent>{
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.post<ChangementEmplacementComponent>("http://localhost:49/emplacements/save/" + this.user,changementEmplacement, head)
    }else{
      return this.http.post<ChangementEmplacementComponent>("http://128.0.0.220:49/emplacements/save/" + this.user,changementEmplacement, head)
    }
  }
}
