import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UtilisateurComponent} from "../entites/utilisateur/utilisateur.component";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  verifierUtilisateur(identifiant: String){
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.get<UtilisateurComponent>("http://localhost:49/utilisateurs/get/" + identifiant, head)
    }else{
      return this.http.get<UtilisateurComponent>("http://128.0.0.220:49/utilisateurs/get/" + identifiant, head)
    }
  }

  ajouterUtilisateur(utilisateur: UtilisateurComponent){
    const head = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})}
    if (!environment.production){
      return this.http.post<UtilisateurComponent>("http://localhost:49/utilisateurs/save/", utilisateur, head)
    }else{
      return this.http.post<UtilisateurComponent>("http://128.0.0.220:49/utilisateurs/save/", utilisateur, head)
    }
  }
}
