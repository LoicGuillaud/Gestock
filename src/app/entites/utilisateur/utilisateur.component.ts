import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  identifiant: string;
  motDePasse: string;

  constructor() {
    this.identifiant = "";
    this.motDePasse = "";
  }

  ngOnInit(): void {
  }

}
